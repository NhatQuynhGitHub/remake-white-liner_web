import CardProduct from "../CardProduct";
import Products from "@/api/products.json";
import ShopPickStyle from "@/styles/homepage/shop-pick.module.css";

const products = Products.PRODUCTS;
interface ShopPickProps {
  quantityOfProducts: number
}

export default function ShopPick({quantityOfProducts}: ShopPickProps) {
  return (
    <div className={ShopPickStyle["shop-pick"]}>
      <div className={ShopPickStyle["shop__products"]}>
        <div className={ShopPickStyle["product-card__list"]}>
          {products.slice(0, quantityOfProducts).map((product) => (
            <CardProduct
              key={product.id}
              src={product.images}
              alt={product.title}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
