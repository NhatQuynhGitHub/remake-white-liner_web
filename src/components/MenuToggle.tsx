'use client'
import SocialIcon from "./SocialIcon";
import ListStyle from "@/styles/nav-menu-toggle.module.css"
import ItemStyle from "@/styles/nav-menu-toggle.module.css"
import MenuToggleStyle from '@/styles/nav-menu-toggle.module.css'
import MenutoggleBtnStyle from '@/styles/nav-menu-toggle.module.css'
import SocialIconStyle from '@/styles/social-icon.module.css'
import SocialIconListStyle from '@/styles/social-icon.module.css'
import SocialIconItemStyle from '@/styles/social-icon.module.css'
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useState } from "react";
import NavbarToggle from "./NavbarToggle";

export default function MenuToggle(){
    const [toggle, setToggle] = useState(false)
    return (
       <div className={MenuToggleStyle['menu-toggle-mobile']} >
            <button 
                className={MenutoggleBtnStyle["menu-btn"]}
                onClick={() => setToggle(!toggle)}>
                {toggle ?  <IoIosClose /> : <IoIosMenu /> }
            </button>
            {toggle && (
                <div className={MenuToggleStyle['menu-toggle-mobile-detail']}>
                    <h2>Menu</h2>
                    <NavbarToggle 
                        navList={ListStyle['nav__list']}
                        navItem={ItemStyle['nav__list--item']}
                    />
                    <SocialIcon 
                        socialIcon={SocialIconStyle['menu-toggle__social__icon']}
                        socialIconList={SocialIconListStyle['menu-toggle__social__icon-list']}
                        socialIconItem={SocialIconItemStyle['menu-toggle__social__icon-item']}
                    />
                </div>
            )}
       </div> 
    )
}