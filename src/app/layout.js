import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/_Shared/Footer";
import FooterSection from "./_components/_Shared/FooterSection";
import Header from "./_components/_Shared/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fynova",
  description: "Lebensmittel Lieferservice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <FooterSection />
        <Footer />
      </body>
    </html>
  );
}
