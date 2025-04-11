import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Workforce Transfers Landing Page",
  description: "Car Rentals and Employee Transportation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  >
      <body
        className={`${dmSans.variable} antialiased bg-[#EAEEFE]`}
      >
        {children}
      </body>
    </html>
  );
}
