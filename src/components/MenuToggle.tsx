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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlerCloseWindow = (event: MouseEvent) => {
      if (!modalRef.current?.contains(event.target as Node)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handlerCloseWindow);
    return () => {
      document.removeEventListener("mousedown", handlerCloseWindow);
    };
  }, [modalRef]);

  return (
    <div className={NavMenuToggleStyle["menu-toggle"]}>
      <button
        className={`${NavMenuToggleStyle["menu-btn"]} ${NavMenuToggleStyle["menu-btn--open"]}`}
        onClick={() => setToggle(!toggle)}
      >
        <IoIosMenu />
      </button>

      <div
        className={`${NavMenuToggleStyle["nav-dropdown--menu"]} ${
          NavMenuToggleStyle["menu-modal"]
        }
        } ${
          toggle ? "active__dropdown-nav-menu" : "inactive__dropdown-nav-menu"
        }`}
      >
        <div
          className={NavMenuToggleStyle["menu-toggle-mobile"]}
          ref={modalRef}
        >
          <button
            className={`${NavMenuToggleStyle["menu-btn"]} ${NavMenuToggleStyle["menu-btn--close"]}`}
            onClick={() => setToggle(false)}
          >
            <IoIosClose />
          </button>
          <div className={NavMenuToggleStyle["menu-toggle-mobile-detail"]}>
            <h2>Menu</h2>
            <NavbarToggle
              handleCloseMenu={() => setToggle(false)}
              navList={NavMenuToggleStyle["nav__list"]}
              navItem={NavMenuToggleStyle["nav__list--item"]}
            />
            <div className={NavMenuToggleStyle["user"]}>
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
        </div>
      </div>
    </div>
  );
}
