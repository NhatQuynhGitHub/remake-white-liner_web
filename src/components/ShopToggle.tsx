'use client'
import { useState } from "react";
import ListStyle from '@/styles/shop-toggle-menu.module.css'
import ItemStyle from '@/styles/shop-toggle-menu.module.css'
import ShopMenuDetail from "./ShopMenuDetail";
import ShopToggleMenuStyle from '@/styles/shop-toggle-menu.module.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function ShopToggle({shopMenuStyle, shopBtnStyle, shopBackBtnStyle}){
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
                {' '}
                <FaArrowRight />
            </div> 
            {showMenu && 
                <div 
                    style={{backgroundColor: 'white'}} 
                    className={ShopToggleMenuStyle['shop-toggle-menu']}
                >
                    <div
                    role="button"
                    onClick={handleClick}
                    className={shopBackBtnStyle}
                    >
                        <FaArrowLeft />
                        {' '}
                        <span style={{textTransform:'uppercase'}}>Shop</span>
                    </div> 
                    <ShopMenuDetail
                        shopList={ListStyle['shop__list']}
                        shopItem={ItemStyle['shop__list--item']}
                    
                    />
                </div>
            }
        </div>
    )
}