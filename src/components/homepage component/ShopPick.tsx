import Products from "@/api/products.json";
import ShopPickStyle from "@/styles/homepage/shop-pick.module.css";
import CardProduct from "../CardProduct";
import CardProductItem from "../CardProductItem";

const products = Products.PRODUCTS;
interface ShopPickProps {
  quantityOfProducts: number;
}

export default function ShopPick({ quantityOfProducts }: ShopPickProps) {
  return (
    <div className={ShopPickStyle["shop-pick"]}>
      <div className={ShopPickStyle["shop__products"]}>
        <div className={ShopPickStyle["product-card__list"]}>
          {products.slice(0, quantityOfProducts).map((product) => (
            <CardProduct className={ShopPickStyle['card-product']} key={product.id}>
              <CardProductItem
                src={product.images}
                alt={product.title}
                title={product.title}
                price={product.price}
              />
            </CardProduct>
          ))}
        </div>
      </div>
    </div>
  );
}
