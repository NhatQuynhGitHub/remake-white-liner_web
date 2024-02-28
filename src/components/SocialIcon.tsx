'use client'
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

interface SocialIconProps {
    socialIcon?: string, 
    socialIconList?: string,
    socialIconItem?: string
}

export default function SocialIcon({
    socialIcon, 
    socialIconList,
    socialIconItem
} : SocialIconProps){
    return (
        <div className={socialIcon}>
            <ul className={socialIconList}>
                <li className={socialIconItem}><Link href="/"><FaFacebook /></Link></li>
                <li className={socialIconItem}><Link href="/"><FaPinterest /></Link></li>
                <li className={socialIconItem}><Link href="/"><FaInstagram/></Link></li>
                <li className={socialIconItem}><Link href="/"><FaYoutube /></Link></li>
            </ul>
        </div>
    )
}