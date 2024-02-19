import Link from "next/link";
import {  FaLongArrowAltUp } from "react-icons/fa";

export default function FooterCopyright(){
    return (
        <div className="footer--copyright">
            <div className="scroll__top">
                <span className="arrow-icon"><FaLongArrowAltUp /></span>
                <button className="top-btn"><Link href="/">Top</Link></button>
            </div>
            <div className="copyright-detail">
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