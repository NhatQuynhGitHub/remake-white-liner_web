import Link from "next/link";

interface ShopMenuDetailProps {
    shopList?: string, shopItem?: string
}

export default function ShopMenuDetail({shopList, shopItem} : ShopMenuDetailProps){
    return (
        <ul className={shopList}>
            <li className={shopItem}><Link href="/collections/bestsellers">Bestsellers</Link></li>
            <li className={shopItem}><Link href="/collections/templates">Template</Link></li>
            <li className={shopItem}><Link href="/collections/for-home">For home</Link></li>
            <li className={shopItem}><Link href="/collections">Browser all collections</Link></li>
        </ul>
    )
}