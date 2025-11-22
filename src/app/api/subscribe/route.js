import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
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

    // Email to you (notification of new subscriber)
    const mailToYou = {
      from: process.env.NM_EMAIL_USER,
      to: process.env.NM_EMAIL_USER,
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #037080; border-bottom: 2px solid #037080; padding-bottom: 10px;">
            New Newsletter Subscriber
          </h2>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 16px; color: #374151;">
              A new user has subscribed to your newsletter:
            </p>
            <p style="font-size: 18px; color: #037080; font-weight: bold;">
              <a href="mailto:${email}" style="color: #037080; text-decoration: none;">${email}</a>
            </p>
          </div>

          <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #0c4a6e; margin: 0; font-size: 14px;">
              💡 <strong>Tip:</strong> Add this email to your newsletter mailing list to keep them updated with your latest news and services.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="color: #64748b; font-size: 14px;">
              Subscription received from NDIS Beauty Collective website footer.
            </p>
          </div>
        </div>
      `,
    };

    // Welcome email to the subscriber
    const welcomeEmail = {
      from: process.env.NM_EMAIL_USER,
      to: email,
      replyTo: process.env.NM_EMAIL_USER,
      subject: 'Welcome to NDIS Beauty Collective Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #037080; border-bottom: 2px solid #037080; padding-bottom: 10px;">
            Welcome to Our Newsletter!
          </h2>

          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Thank you for subscribing to the NDIS Beauty Collective newsletter!
          </p>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #037080;">
            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 0;">
              You'll now receive updates about our services, special offers, beauty tips, and news about mobile hair and beauty services for NDIS clients.
            </p>
          </div>

          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #92400e; margin: 0;">
              <strong>🌸 What to Expect:</strong><br>
              • Service updates and special promotions<br>
              • Beauty and hair care tips<br>
              • NDIS-friendly service announcements<br>
              • Exclusive subscriber benefits
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            NDIS Beauty Collective provides mobile hair and beauty services for NDIS clients across Melbourne and surrounding suburbs. We specialize in creating comfortable, sensory-friendly experiences for all our clients.
          </p>

          <div style="text-align: center; margin-top: 30px;">
            <p style="font-size: 14px; color: #64748b;">
              <strong>Contact Us:</strong><br>
              Phone: +61 404 550 851<br>
              Email: admin@ndisbeautycollective.com.au<br>
              Location: Melbourne and surrounding suburbs
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              You're receiving this email because you subscribed to our newsletter.<br>
              If you wish to unsubscribe, please contact us at admin@ndisbeautycollective.com.au
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    try {
      console.log('Sending notification to owner...');
      const sendResult1 = await transporter.sendMail(mailToYou);
      console.log('Notification sent successfully:', sendResult1.messageId);

      console.log('Sending welcome email to subscriber...');
      const sendResult2 = await transporter.sendMail(welcomeEmail);
      console.log('Welcome email sent successfully:', sendResult2.messageId);

      return NextResponse.json(
        { message: 'Subscription successful! Check your email for confirmation.' },
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
    console.error('General error in subscribe API:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}
