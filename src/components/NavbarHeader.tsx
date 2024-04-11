'use client'
import Link from "next/link"
import MenuStyle from '@/styles/shop-header-menu.module.css'
import BtnStyle from '@/styles/shop-header-menu.module.css'
import NavBarHeaderStyle from '@/styles/navbar-header.module.css'
import ShopMenuHeader from "./ShopMenuHeader"


export default function NavbarHeader(){
    
    
    return (
        <>
        <ul className={NavBarHeaderStyle['nav__list']}>
                <li className={NavBarHeaderStyle['nav__list--item']}><Link href="/">Home</Link></li>
                <li className={NavBarHeaderStyle['nav__list--item']}>
                    <ShopMenuHeader
                        shopMenuStyle={MenuStyle['shop-menu']}
                        shopBtnStyle={BtnStyle['shop-btn']}
                    />
                </li>
                <li className={NavBarHeaderStyle['nav__list--item']}><Link href="/">About</Link></li>
                <li className={NavBarHeaderStyle['nav__list--item']}><Link href="/blog">Blog</Link></li>
                <li className={NavBarHeaderStyle['nav__list--item']}><Link href="/">FAQ</Link></li>
                <li className={NavBarHeaderStyle['nav__list--item']}><Link href="/">Contact</Link></li>
            </ul>
        </>
        
    )
}