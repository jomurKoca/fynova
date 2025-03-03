'use client';
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/_Shared/Footer";
import FooterSection from "./_components/_Shared/FooterSection";
import FooterMitAdresse from "./_components/_Shared/FooterMitAdresse";
//import Header from "./_components/_Shared/Header";
import { usePathname } from 'next/navigation';
import Header from "./_components/_Shared/Header"; 
import MobileFooter from "./_components/_Shared/MobilFooter";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
{/*
export const metadata = {
  title: "Fynova",
  description: "Lebensmittel Lieferservice",
};
*/}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {pathname !== '/' && <Header />}
        <main>{children}</main>
        {pathname !== '/' && <FooterMitAdresse />} 
        {pathname !== '/' && <MobileFooter />}
        <FooterSection />
        <Footer />
      </body>
    </html>
  );
}

{/*
  
*/}
