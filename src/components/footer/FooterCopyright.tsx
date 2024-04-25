import Link from "next/link";
import {  FaLongArrowAltUp } from "react-icons/fa";
import FooterStyle from '@/styles/footer-style.module.css'


export default function FooterCopyright(){
    return (
        <div className={FooterStyle["footer__copyright"]}>
            <Link href="/">
                <button className={FooterStyle["scroll__top"]}>
                    <span className={FooterStyle["arrow-icon"]}><FaLongArrowAltUp /></span>
                    <span className={FooterStyle["top-btn"]}>Top</span>
                </button>
            </Link>
            <div className={FooterStyle["footer__copyright-detail"]}>
                <span>&copy; {new Date().getFullYear()} </span>
                <Link href="/">White Liner Theme</Link>
                <Link href="/"> Powered by Shopify</Link>
                
            </div>
        </div>
    )
}