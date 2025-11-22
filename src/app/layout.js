import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "NDIS Beauty Collective",
  description: "Melbourne beauty services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} antialiased`}
      >
        <ScrollRevealWrapper>
          {children}
        </ScrollRevealWrapper>
      </body>
    </html>
  );
}
