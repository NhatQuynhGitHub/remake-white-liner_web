'use client'
import Navbar from "./Navbar";
import SocialIcon from "./SocialIcon";
import navMenu from "@/styles/nav-menu-toggle.module.css"
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useState } from "react";

export default function MenuToggle(){
    const [toggle, setToggle] = useState(true)
    return (
       <div className="menu-toggle-mobile">
            <button 
                className="menu-btn"
                onClick={() => setToggle(!toggle)}>
                {toggle ?  <IoIosClose /> : <IoIosMenu /> }
            </button>
            {toggle && (
                <div>
                    <h2>Menu</h2>
                    <Navbar className={navMenu['nav']} />
                    <SocialIcon />
                </div>
            )}
       </div> 
    )
}