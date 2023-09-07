import style from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={`${style.footer_container}`}>
        <div>
          <Image
            src="/images/mbc_logo.svg"
            alt="MBC Logo"
            width={300}
            height={300}
          />
        </div>

        <div className={`${style.links}`}>
          <Link
            className={`${style.link}`}
            href="https://www.instagram.com/mbclab/"
            target="_blank"
          >
            Instagram
          </Link>
          <Link className={`${style.link}`} href="/about">
            About Us
          </Link>
        </div>
      </div>
    </>
  );
}
