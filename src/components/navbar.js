"use client";

import style from "@/components/navbar.module.css";
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
          <Image
            src="/data/My_-_IPond-removebg-preview 3.png"
            alt="My-IPond"
            width={150}
            height={150}
          />
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
        </div>
      </div>
    </>
  );
}
