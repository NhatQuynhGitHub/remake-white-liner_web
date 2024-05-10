"use client";
import Link from "next/link";
import ShopDropDownMenuStyle from "@/styles/nav-menu-toggle.module.css";
import { usePathname } from "next/navigation";
import ShopMenuDetail from "./ShopMenuDetail";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface NavbarTogglerProps {
  navList?: string;
  navItem?: string;
  handleCloseMenu: any;
}
export default function NavbarToggle({
  navList,
  navItem,
  handleCloseMenu,
}: NavbarTogglerProps) {
  const [controlOpen, setControlOpen] = useState(false);
  const pathname = usePathname();
  // const router = useRouter();

  // console.log("before:", controlOpen);

  // function closeMenuWindow() {
  //   // console.log("Before setting to false:", controlOpen);

  //     router.push("/")
  //     setControlOpen(false);

  //     console.log("aaaa:",)

  // }
  // useEffect(() => {
  //   console.log("Updated value of controlOpen:", controlOpen);
  // }, [controlOpen]);

  return (
    <>
      <div>
        <ul className={navList}>
          <li className={navItem}>
            <Link
              style={{ cursor: "pointer" }}
              onClick={handleCloseMenu}
              href="/"
              className={`link ${pathname === "/" ? "active" : ""}`}
            >
              <span>Home</span>
            </Link>
          </li>
          <li className={navItem}>
            <span
              style={{ cursor: "pointer" }}
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
              <span
                onClick={() => {
                  setControlOpen(false);
                }}
                style={{
                  textTransform: "capitalize",
                  textAlign: "left",
                  paddingLeft: "20px",
                  cursor: "pointer",
                }}
              >
                Shop ←{" "}
              </span>
              <ShopMenuDetail />
            </div>
          </li>
          <li className={navItem}>
            <Link
            onClick={handleCloseMenu}
              className={`link ${pathname === "/about" ? "active" : ""}`}
              href="/about"
            >
              <span>About</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link
            onClick={handleCloseMenu}
              className={`link ${pathname === "/blog" ? "active" : ""}`}
              href="/blog"
            >
              <span>Blog</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link
            onClick={handleCloseMenu}
              className={`link ${pathname === "/faq" ? "active" : ""}`}
              href="/faq"
            >
              <span>FAQ</span>
            </Link>
          </li>
          <li className={navItem}>
            <Link
              className={`link ${pathname === "/contact" ? "active" : ""}`}
              href="/contact"
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
