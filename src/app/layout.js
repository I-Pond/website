import "@/styles/globals.css";
import Image from "next/image";
import logo from "../../public/images/ipond_logo.svg";
import logo_mbc from "../../public/images/mbc_logo.svg";
import Link from "next/link";

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
          <nav className="grid grid-cols-2 gap-5 justify-center text-center navbar text-white font-mono min-h-10">
            <div className="col-start-1 h-32 ml-10 max-w-fit">
              <Link href="/">
                <Image src={logo} alt="My Ipond" className="mt-3" />
              </Link>
            </div>

            <div className="grid grid-cols-3 mx-3 items-center text-lg">
              <span>
                <Link
                  href={`/`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p>Home</p>
                </Link>
              </span>
              <span>
                <Link
                  href={`/dashboard`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p>Dashboard</p>
                </Link>
              </span>
              <span>
                <Link
                  href="/predictor"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <p>Predictor</p>
                </Link>
              </span>
            </div>
          </nav>

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
