'use client'
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

export default function SocialIcon(){
    return (
        <div>
            <ul className="list-social">
                <li className="social-icon"><Link href="/"><FaFacebook /></Link></li>
                <li className="social-icon"><Link href="/"><FaPinterest /></Link></li>
                <li className="social-icon"><Link href="/"><FaInstagram/></Link></li>
                <li className="social-icon"><Link href="/"><FaYoutube /></Link></li>
            </ul>
        </div>
    )
}