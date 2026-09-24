"use client";
import { useState } from "react";
import Image from "next/image";
import Icon from "./ui-icon";
import { links } from "../navigation";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#home" aria-label="Nandinway нүүр">
          <Image
            src="/images/logo.webp"
            width={192}
            height={25}
            alt="NANDINWAY Air Ticketing Agency"
            priority
          />
        </a>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="navigation"
          aria-label="Цэс нээх"
          onClick={() => setOpen(!open)}
        >
          <Icon name="menu" />
        </button>
        <nav
          id="navigation"
          className={open ? "nav open" : "nav"}
          aria-label="Үндсэн цэс"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="phone-pill" href="tel:70002929">
          <Icon name="phone" />
          7000 2929
        </a>
      </div>
    </header>
  );
}
