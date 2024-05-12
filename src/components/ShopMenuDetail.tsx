import Link from "next/link";
import { usePathname } from "next/navigation";

interface ShopMenuDetailProps {
  shopList?: string;
  shopItem?: string;
  onClick: any;
}

export default function ShopMenuDetail({
  shopList,
  shopItem,
  onClick,
}: ShopMenuDetailProps) {
    const pathname = usePathname()
  return (
    <ul className={shopList}>
      <li onClick={onClick} className={shopItem}>
        <Link className={`link ${pathname === "/collections/bestsellers" ? "active" : ""}`} style={{ paddingTop: "10px" }} href="/collections/bestsellers">
          Bestsellers
        </Link>
      </li>
      <li onClick={onClick} className={shopItem}>
        <Link className={`link ${pathname === "/collections/templates" ? "active" : ""}`} style={{ paddingTop: "10px" }} href="/collections/templates">
          Template
        </Link>
      </li>
      <li onClick={onClick} className={shopItem}>
        <Link className={`link ${pathname === "/collections/for-home" ? "active" : ""}`} style={{ paddingTop: "10px" }} href="/collections/for-home">
          For home
        </Link>
      </li>
      <li onClick={onClick} className={shopItem}>
        <Link className={`link ${pathname === "/collections" ? "active" : ""}`} style={{ paddingTop: "10px" }} href="/collections">
          Browser all collections
        </Link>
      </li>
    </ul>
  );
}
