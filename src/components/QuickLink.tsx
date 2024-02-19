import Link from "next/link";


export default function QuickLink(){
    return (
        <div className="footer-block">
            <h2>Quick Links</h2>
            <ul className="footer-block__menu--list"> 
                <li className="footer__menu-item"><Link href="/">About</Link></li>
                <li className="footer__menu-item"><Link href="/">Bestseller</Link></li>
                <li className="footer__menu-item"><Link href="/">FAQ</Link></li>
                <li className="footer__menu-item"><Link href="/">Blog</Link></li>
                <li className="footer__menu-item"><Link href="/">Contact</Link></li>
                <li className="footer__menu-item"><Link href="/">Privacy policy</Link></li>
                <li className="footer__menu-item"><Link href="/">Terms</Link></li>
            </ul>
        </div>
    )
}