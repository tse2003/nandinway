"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./ui-icon";
import { links } from "../navigation";
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" aria-label="Nandinway нүүр">
          <Image
            src="/images/logo.webp"
            width={192}
            height={25}
            alt="NANDINWAY Air Ticketing Agency"
            priority
          />
        </Link>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? "Цэс хаах" : "Цэс нээх"}
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
            <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
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
