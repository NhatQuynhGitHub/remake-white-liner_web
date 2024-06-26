"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuStyle from "@/styles/shop-header-menu.module.css";
import BtnStyle from "@/styles/shop-header-menu.module.css";
import NavBarHeaderStyle from "@/styles/navbar-header.module.css";
import ShopMenuHeader from "./ShopMenuHeader";

export default function NavbarHeader() {
  const pathname = usePathname();

  return (
    <>
      <ul className={NavBarHeaderStyle["nav__list"]}>
        <li className={NavBarHeaderStyle["nav__list--item"]}>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
        </li>
        <li className={NavBarHeaderStyle["nav__list--item"]}>
          <ShopMenuHeader
            shopMenuStyle={MenuStyle["shop-menu"]}
            shopBtnStyle={BtnStyle["shop-btn"]}
          />
        </li>
        <li className={NavBarHeaderStyle["nav__list--item"]}>
          <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
        </li>
        <li className={NavBarHeaderStyle["nav__list--item"]}>
          <Link className={`link ${pathname === '/blog' ? 'active' : ''}`} href="/blog">Blog</Link>
        </li>
        <li className={NavBarHeaderStyle["nav__list--item"]}>
          <Link className={`link ${pathname === '/faq' ? 'active' : ''}`} href="/faq">FAQ</Link>
        </li>
        <li className={NavBarHeaderStyle["nav__list--item"]}>
          <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
