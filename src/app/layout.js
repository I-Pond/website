import "@/styles/globals.css";
import Image from "next/image";
import logo from "../../public/images/ipond_logo.svg";
import logo_mbc from "../../public/images/mbc_logo.svg";
import Link from "next/link";
import Navbar from "@/components/navbar";

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

          <footer
            className="h-64 grid grid-cols-2 gap-10 items-center"
            style={{ background: "#011422" }}
          >
            <div className="col-start-1 ml-10">
              <a href="https://www.instagram.com/mbclab/" target="_blank">
                <Image src={logo_mbc} alt="MBC Laboratory" />
              </a>
            </div>
            <div className="col-span-1 text-white grid grid-cols-3">
              <div className="col-span-1">
                <Link
                  href="/about"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p>About us</p>
                </Link>
              </div>
              <div className="col-span-1">
                <Link
                  href="https://www.instagram.com/mbclab/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p>Instagram</p>
                </Link>
                <p>Whatsapp</p>
                <p>Linkedin</p>
              </div>
              <div className="col-span-1">
                <p>FAQs</p>
                <p>Support Center</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
}
