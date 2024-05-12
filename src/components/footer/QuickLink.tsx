'use client'
import Link from "next/link";
import FooterMenuItemStyle from "@/styles/footer-style.module.css";
import FooterBlockMenuListStyle from "@/styles/footer-style.module.css";
import { usePathname } from "next/navigation";

export default function QuickLink() {
  const pathName = usePathname();
  return (
    <div className="footer-block">
      <h2>Quick Links</h2>
      <ul className={FooterBlockMenuListStyle["footer-block__menu--list"]}>
        <li className={FooterMenuItemStyle["footer__menu-item"]}>
          <Link
            className={`link ${pathName === "/about" ? "active-footer" : " "}`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li className={FooterMenuItemStyle["footer__menu-item"]}>
          <Link
            className={`link ${pathName === "/collections/bestsellers" ? "active-footer" : " "}`}
            href="/collections/bestsellers"
          >
            Bestseller
          </Link>
        </li>
        <li className={FooterMenuItemStyle["footer__menu-item"]}>
          <Link
            className={`link ${pathName === "/faq" ? "active-footer" : " "}`}
            href="/faq"
          >
            FAQ
          </Link>
        </li>
        <li className={FooterMenuItemStyle["footer__menu-item"]}>
          <Link
            className={`link ${pathName === "/blog" ? "active-footer" : " "}`}
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li className={FooterMenuItemStyle["footer__menu-item"]}>
          <Link
            className={`link ${pathName === "/contact" ? "active-footer" : " "}`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li className={FooterMenuItemStyle["footer__menu-item"]}>
          <Link
            className={`link ${pathName === "/" ? "active-footer" : " "}`}
            href="/"
          >
            Privacy policy
          </Link>
        </li>
        <li className={FooterMenuItemStyle["footer__menu-item"]}>
          <Link
            className={`link ${pathName === "/" ? "active-footer" : " "}`}
            href="/"
          >
            Terms
          </Link>
        </li>
      </ul>
    </div>
  );
}
