import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate input
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log('Environment variables check:', {
      user: process.env.NM_EMAIL_USER ? 'Set' : 'Missing',
      pass: process.env.NM_EMAIL_PW ? 'Set' : 'Missing'
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NM_EMAIL_USER,
        pass: process.env.NM_EMAIL_PW,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'SMTP configuration error', details: String(verifyError) },
        { status: 500 }
      );
    }

    // Email to you (receiving the callback request)
    const mailToYou = {
      from: process.env.NM_EMAIL_USER,
      to: process.env.NM_EMAIL_USER,
      subject: `New Callback Request: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #037080; border-bottom: 2px solid #037080; padding-bottom: 10px;">
            New Callback Request
          </h2>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Service:</strong> ${service}</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #037080;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" style="display: inline-block; background-color: #037080; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">Reply Now</a>
            <a href="tel:${phone}" style="display: inline-block; background-color: #5fb5b9; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Call Back</a>
          </div>

          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="color: #64748b; font-size: 14px;">
              This email was sent from NDIS Beauty Collective callback form.
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply to the user
    const autoReplyToUser = {
      from: process.env.NM_EMAIL_USER,
      to: email,
      replyTo: process.env.NM_EMAIL_USER,
      subject: `Thank you for your callback request, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #037080; border-bottom: 2px solid #037080; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>

          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Hi <strong>${name}</strong>,
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Thank you for requesting a callback from NDIS Beauty Collective! We've received your request and will contact you at <strong>${phone}</strong> as soon as possible.
          </p>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #037080;">
            <h3 style="color: #374151; margin-top: 0;">Your Request Summary:</h3>
            <p><strong>Service Requested:</strong> ${service}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Message:</strong> "${message}"</p>
          </div>

          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #92400e; margin: 0;">
              <strong>Expected Response Time:</strong> We typically respond within 24 hours.
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            NDIS Beauty Collective provides mobile hair and beauty services for NDIS clients across Melbourne and surrounding suburbs.
          </p>

          <div style="text-align: center; margin-top: 30px;">
            <p style="font-size: 14px; color: #64748b;">
              <strong>Contact Us:</strong><br>
              Phone: +61 404 550 851<br>
              Email: admin@ndisbeautycollective.com.au
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Best regards,<br>
            <strong>NDIS Beauty Collective Team</strong>
          </p>

          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    try {
      console.log('Sending email to owner...');
      const sendResult1 = await transporter.sendMail(mailToYou);
      console.log('Email to owner sent successfully:', sendResult1.messageId);

      console.log('Sending auto-reply to user...');
      const sendResult2 = await transporter.sendMail(autoReplyToUser);
      console.log('Auto-reply sent successfully:', sendResult2.messageId);

      return NextResponse.json(
        { message: 'Callback request sent successfully!' },
        { status: 200 }
      );
    } catch (sendErr) {
      console.error('Error during email sending:', sendErr);
      return NextResponse.json(
        { error: 'Failed to send email(s)', details: String(sendErr) },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('General error in callback API:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}
