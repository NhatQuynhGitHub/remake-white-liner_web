'use client'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import ListStyle from '@/styles/shop-header-menu.module.css'
import ItemStyle from '@/styles/shop-header-menu.module.css'
import ShopMenuDetail from "./ShopMenuDetail";

interface ShopProps {
    shopMenuStyle?: string, shopBtnStyle?: string
}

export default function Shop({shopMenuStyle, shopBtnStyle} : ShopProps){
    const [showMenu, setShowMenu] = useState(false)
    function handleClick(){
        setShowMenu(!showMenu)
    }
    return (
        <div className={shopMenuStyle}>
            <div
                role="button"
                onClick={handleClick}
                className={shopBtnStyle}
            >
                <span style={{textTransform:'uppercase'}}>Shop</span>
                <RiArrowDropDownLine />
            </div> 
            {showMenu && 
                <ShopMenuDetail
                    shopList={ListStyle['shop__list']}
                    shopItem={ItemStyle['shop__list--item']}
                
                />
            }
        </div>
    )
}