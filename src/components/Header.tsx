import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import SocialIcon from "./SocialIcon";
import Logo from "./Logo";
import Navbar from "./Navbar";
import nav from "@/styles/nav.module.css"
import MenuToggle from "./MenuToggle";




export default function Header(){
    return (
        <header>
            <MenuToggle />
            <div className="header">
                <IoSearch style={{
                    fontSize: '3rem',
                    padding: '10px',
                }} />
                <Logo
                    width={350}
                    height={150}
                />
                <div className="header_icons">
                   <SocialIcon />
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
            <nav>
               <Navbar className={nav ['nav']} />
            </nav>
        </header>
    )
}