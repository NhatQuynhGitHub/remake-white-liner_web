import Link from "next/link";

export default function ShopMenuDetail({shopList, shopItem}){
    return (
        <ul className={shopList}>
            <li className={shopItem}><Link href="/">Bestseller</Link></li>
            <li className={shopItem}><Link href="/">Template</Link></li>
            <li className={shopItem}><Link href="/">For home</Link></li>
            <li className={shopItem}><Link href="/">Browser all collections</Link></li>
        </ul>
    )
}