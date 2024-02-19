'use client'
import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function ShopDetails(){
    const [shopMenu, setShopMenu] = useState(false)
    return (
        <div>
            <div onClick={() => setShopMenu(!shopMenu)}>
                <span style={{textTransform:'uppercase'}}>Shop</span>
                <RiArrowDropDownLine />
            </div>
            {shopMenu && (
                <ul className="shop__list">
                    <li className="shop__list--item"><Link href="/">Bestseller</Link></li>
                    <li className="shop__list--item"><Link href="/">Template</Link></li>
                    <li className="shop__list--item"><Link href="/">For home</Link></li>
                    <li className="shop__list--item"><Link href="/">Browser all collections</Link></li>
                </ul>
            )}
        </div>
    )
}