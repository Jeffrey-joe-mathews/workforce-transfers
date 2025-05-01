import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
})

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
        className={`${dmSans.variable} ${comfortaa.variable} antialiased bg-[#EAEEFE]`}
      >
        {children}
      </body>
    </html>
  );
}
