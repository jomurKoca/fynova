'use client';
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/shared/Footer";
import FooterSection from "../components/shared/FooterSection";
import FooterMitAdresse from "../components/shared/FooterMitAdresse";
//import Header from "./_components/_Shared/Header";
import { usePathname } from 'next/navigation';
import Header from "../components/shared/Header"; 
import MobileFooter from "../components/shared/MobilFooter";


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
