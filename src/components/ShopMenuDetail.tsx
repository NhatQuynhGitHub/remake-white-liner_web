import Link from "next/link";

interface ShopMenuDetailProps {
    shopList?: string, shopItem?: string
}

export default function ShopMenuDetail({shopList, shopItem} : ShopMenuDetailProps){
    return (
        <ul className={shopList}>
            <li className={shopItem}><Link href="/">Bestseller</Link></li>
            <li className={shopItem}><Link href="/">Template</Link></li>
            <li className={shopItem}><Link href="/">For home</Link></li>
            <li className={shopItem}><Link href="/">Browser all collections</Link></li>
        </ul>
    )
}