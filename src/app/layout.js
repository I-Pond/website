import "@/styles/globals.css";
import Image from "next/image";
import logo from "../../public/images/ipond_logo.svg";
import logo_mbc from "../../public/images/mbc_logo.svg";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "My I-Pond",
  description: "Monitor the quality of water.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/logo_circle.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Navbar />

          {children}
          {/* <Analytics /> */}
          <Footer />
        </body>
      </html>
    </>
  );
}
