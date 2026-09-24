import Link from "next/link";
import { links } from "../navigation";
import Icon from "./ui-icon";

export default function Footer() {
  return <footer>
    <div className="container">
      <div className="footer-top">
        <Link href="/" className="footer-brand">NANDINWAY<span>AIR TICKETING AGENCY</span></Link>
        <nav aria-label="Хөлийн цэс">
          {links.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nandinway. Бүх эрх хуулиар хамгаалагдсан.</p>
        <p>Таны нандин дурсамж эндээс эхэлнэ <Icon name="plane" /></p>
      </div>
    </div>
  </footer>;
}
