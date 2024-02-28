'use client'
import Link from "next/link"
import Shop from "./ShopHeader"
import MenuStyle from '@/styles/shop-header-menu.module.css'
import BtnStyle from '@/styles/shop-header-menu.module.css'


export default function NavbarHeader({ navList, navItem }){
    
    return (
        <>
            <ul className={navList}>
                <li className={navItem}><Link href="/">Home</Link></li>
                <li className={navItem}>
                    <Shop
                        shopMenuStyle={MenuStyle['shop-menu']}
                        shopBtnStyle={BtnStyle['shop-btn']}
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