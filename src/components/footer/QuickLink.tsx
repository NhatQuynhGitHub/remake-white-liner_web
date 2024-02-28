import Link from "next/link";
import FooterMenuItemStyle from '@/styles/footer-style.module.css'
import FooterBlockMenuListStyle from '@/styles/footer-style.module.css'


export default function QuickLink(){
    return (
        <div className="footer-block">
            <h2>Quick Links</h2>
            <ul className={FooterBlockMenuListStyle["footer-block__menu--list"]}> 
                <li className={FooterMenuItemStyle["footer__menu-item"]}><Link href="/">About</Link></li>
                <li className={FooterMenuItemStyle["footer__menu-item"]}><Link href="/">Bestseller</Link></li>
                <li className={FooterMenuItemStyle["footer__menu-item"]}><Link href="/">FAQ</Link></li>
                <li className={FooterMenuItemStyle["footer__menu-item"]}><Link href="/">Blog</Link></li>
                <li className={FooterMenuItemStyle["footer__menu-item"]}><Link href="/">Contact</Link></li>
                <li className={FooterMenuItemStyle["footer__menu-item"]}><Link href="/">Privacy policy</Link></li>
                <li className={FooterMenuItemStyle["footer__menu-item"]}><Link href="/">Terms</Link></li>
            </ul>
        </div>
    )
}