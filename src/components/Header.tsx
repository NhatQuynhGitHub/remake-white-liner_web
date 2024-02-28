import Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import SocialIcon from "./SocialIcon";
import SocialIconStyle from '@/styles/social-icon.module.css'
import SocialIconListStyle from '@/styles/social-icon.module.css'
import SocialIconItemStyle from '@/styles/social-icon.module.css'
import Logo from "./Logo";
import ListStyle from "@/styles/nav.module.css"
import ItemStyle from "@/styles/nav.module.css"
import MenuToggle from "./MenuToggle";
import logoStyle from "@/styles/logo.module.css"
import { headers } from "next/headers";
import NavbarHeader from "./NavbarHeader";
import SearchOpenField from "./searchComponent/SearchOpenField";
import containerStyle from '@/styles/header-style.module.css'

export default function Header(){
    return (
        <header>
            <div className={containerStyle['container']}>
                <MenuToggle />
                <div className="header">
                    <SearchOpenField />
                    <Logo
                        className={logoStyle["logo-header"]}
                        width={350}
                        height={150}
                    />
                    <div className="header_icons">
                    <SocialIcon 
                        socialIcon={SocialIconStyle['header__social__icon']}
                        socialIconList={SocialIconListStyle['header__social__icon-list']}
                        socialIconItem={SocialIconItemStyle['header__social__icon-item']}
                    />
                        <div 
                            style={{
                                marginLeft: '5px',
                                fontSize: '1.6rem',
                                padding: '10px',
                                cursor: 'pointer'
                            }}
                        >
                            <BiShoppingBag />
                        </div>
                    </div>
                </div>
            </div>
            
            <nav>
               <NavbarHeader
                navList={ListStyle['nav__list']}
                navItem={ItemStyle['nav__list--item']}
               />
            </nav>
        </header>
    )
}