"use client";

import style from "@/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={`${style.navbar_container}`}>
        <div
          className={`${style.logo}`}
          onClick={() => setActive(!active)}
          style={{ width: "100%" }}
        >
          <Link href="/">
            <Image
              src="/data/My_-_IPond-removebg-preview 3.png"
              alt="My-IPond"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className={`${style.container} ${active ? "flex" : "none"}`}>
          <Link href="/" onClick={() => setActive(!active)}>
            Home
          </Link>
          <Link href="/dashboard" onClick={() => setActive(!active)}>
            Dashboard
          </Link>
          <Link href="/predictor" onClick={() => setActive(!active)}>
            Predictor
          </Link>
          <Link href="/about" onClick={() => setActive(!active)}>
            About
          </Link>
        </div>
      </div>
    </>
  );
}
