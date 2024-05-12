"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import ListStyle from "@/styles/shop-header-menu.module.css";
import ItemStyle from "@/styles/shop-header-menu.module.css";
import ShopMenuDetail from "./ShopMenuDetail";

interface ShopProps {
  shopMenuStyle?: string;
  shopBtnStyle?: string;
}

export default function ShopMenuHeader({
  shopMenuStyle,
  shopBtnStyle,
}: ShopProps) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlerClose = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handlerClose);
    return () => {
      document.removeEventListener("mousedown", handlerClose);
    };
  }, [menuRef]);

  return (
    <div className={shopMenuStyle} ref={menuRef}>
      <div
        role="button"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className={shopBtnStyle}
      >
        <div className={`link ${showMenu ? "active" : ""}`}>
          <span style={{ textTransform: "uppercase" }}>Shop</span>
          <RiArrowDropDownLine />
        </div>
      </div>
      {showMenu && (
        <div>
          <ShopMenuDetail
            onClick={() => setShowMenu(false)}
            shopList={ListStyle["shop__list"]}
            shopItem={ItemStyle["shop__list--item"]}
          />
        </div>
      )}
    </div>
  );
}
