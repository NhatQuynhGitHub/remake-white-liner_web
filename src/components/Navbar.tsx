import Link from "next/link"
import ShopDetails from "./ShopDetails"

export default function Navbar({ className }){
    return (
        <ul className={`nav ${className}`}>
            <li><Link href="/">Home</Link></li>
            <li>
                <ShopDetails />
            </li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Blog</Link></li>
            <li><Link href="/">FAQ</Link></li>
            <li><Link href="/">Contact</Link></li>
        </ul>
        
    )
}