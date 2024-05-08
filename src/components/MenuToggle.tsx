"use client";
import SocialIcon from "./SocialIcon";
import NavMenuToggleStyle from "@/styles/nav-menu-toggle.module.css";
import SocialIconStyle from "@/styles/social-icon.module.css";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import NavbarToggle from "./NavbarToggle";
import { FaRegUser } from "react-icons/fa";

export default function MenuToggle() {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handlerCloseWindow = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setToggle(false)
      }
    }
    document.addEventListener("mousedown", handlerCloseWindow);
    return () => {
      document.removeEventListener("mousedown", handlerCloseWindow)
    }
  }, [menuRef])

  return (
    <div className={NavMenuToggleStyle["menu-toggle-mobile"]} ref={menuRef}>
      <button
        className={NavMenuToggleStyle["menu-btn"]}
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <IoIosClose /> : <IoIosMenu />}
      </button>
      {toggle && (
        <div className={NavMenuToggleStyle["menu-toggle-mobile-detail"]}>
          <h2>Menu</h2>
          <NavbarToggle
            navList={NavMenuToggleStyle["nav__list"]}
            navItem={NavMenuToggleStyle["nav__list--item"]}
          />
          <div className={NavMenuToggleStyle['user']}>
            <span>
              <FaRegUser className={NavMenuToggleStyle["user--icon"]} />
            </span>{" "}
            <span className={NavMenuToggleStyle["user--login"]}>Login</span>
            <SocialIcon
              socialIcon={SocialIconStyle["menu-toggle__social__icon"]}
              socialIconList={
                SocialIconStyle["menu-toggle__social__icon-list"]
              }
              socialIconItem={
                SocialIconStyle["menu-toggle__social__icon-item"]
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}


