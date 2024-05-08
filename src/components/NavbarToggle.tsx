"use client";
import Link from "next/link";
import ShopDropDownMenuStyle from "@/styles/nav-menu-toggle.module.css";
import { useParams, usePathname } from "next/navigation";
import ShopMenuDetail from "./ShopMenuDetail";
import { useState } from "react";

interface NavbarTogglerProps {
  navList?: string;
  navItem?: string;
}
export default function NavbarToggle({ navList, navItem }: NavbarTogglerProps) {
  const [controlOpen, setControlOpen] = useState(false);
  const pathname = usePathname();

  function handleLinkClose() {
    setControlOpen(false);
  }

  return (
    <>
      <div>
        <ul className={navList}>
          <li className={navItem}>
            <Link
              onClick={handleLinkClose}
              className={`link ${pathname === "home" ? "active" : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className={navItem}>
            <span
              onClick={() => {
                setControlOpen(!controlOpen);
              }}
            >
              Shop →
            </span>
            <div
              className={`${ShopDropDownMenuStyle["shop-dropdown--menu"]} ${
                controlOpen
                  ? "active-menu-toggle__shop"
                  : "inactive-menu-toggle__shop"
              }`}
            >
              
              <span onClick={() => {setControlOpen(false)}}>Shop ← </span>
              <ShopMenuDetail />
            </div>
          </li>
          <li className={navItem}>
            <Link
              onClick={handleLinkClose}
              className={`link ${pathname === "/about" ? "active" : ""}`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li className={navItem}>
            <Link
              onClick={handleLinkClose}
              className={`link ${pathname === "/blog" ? "active" : ""}`}
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li className={navItem}>
            <Link
              onClick={handleLinkClose}
              className={`link ${pathname === "/faq" ? "active" : ""}`}
              href="/faq"
            >
              FAQ
            </Link>
          </li>
          <li className={navItem}>
            <Link
              onClick={handleLinkClose}
              className={`link ${pathname === "/contact" ? "active" : ""}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
