'use client'
import Link from "next/link"
import MenuStyle from '@/styles/shop-toggle-menu.module.css'
import BtnStyle from '@/styles/shop-toggle-menu.module.css'
import BtnBackStyle from '@/styles/shop-toggle-menu.module.css'
import ShopToggle from "./ShopToggle"


export default function NavbarToggle({ navList, navItem }){
    
    return (
        <>
            <ul className={navList}>
                <li className={navItem}><Link href="/">Home</Link></li>
                <li className={navItem}>
                    <ShopToggle
                        shopMenuStyle={MenuStyle['shop-menu']}
                        shopBtnStyle={BtnStyle['shop-btn']}
                        shopBackBtnStyle={BtnBackStyle['shop-btn--back']}
                    />
                </li>
                <li className={navItem}><Link href="/">About</Link></li>
                <li className={navItem}><Link href="/">Blog</Link></li>
                <li className={navItem}><Link href="/">FAQ</Link></li>
                <li className={navItem}><Link href="/">Contact</Link></li>
            </ul>
           
        </>
        
    )
}