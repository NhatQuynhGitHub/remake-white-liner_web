import Link from "next/link";
import {  FaLongArrowAltUp } from "react-icons/fa";
import FooterCopyRightStyle from '@/styles/footer-style.module.css'
import FooterArrowIconStyle from '@/styles/footer-style.module.css'
import FooterTopBtnStyle from '@/styles/footer-style.module.css'
import FooterScrollTopBtnStyle from '@/styles/footer-style.module.css'
import FooterCopyRightDetailStyle from '@/styles/footer-style.module.css'

export default function FooterCopyright(){
    return (
        <div className={FooterCopyRightStyle["footer__copyright"]}>
            <div className={FooterScrollTopBtnStyle["scroll__top"]}>
                <span className={FooterArrowIconStyle["arrow-icon"]}><FaLongArrowAltUp /></span>
                <button className={FooterTopBtnStyle["top-btn"]}><Link href="/">Top</Link></button>
            </div>
            <div className={FooterCopyRightDetailStyle["footer__copyright-detail"]}>
                <span>&copy; {new Date().getFullYear()} </span>
                <span>
                    <Link href="/">White Liner Theme</Link>
                </span>
                <span>
                    <Link href="/"> Powered by Shopify</Link>
                </span>
            </div>
        </div>
    )
}