import CardProduct from "../CardProduct";
import Products from "@/api/products.json";
import ShopPickStyle from "@/styles/homepage/shop-pick.module.css";

const products = Products.PRODUCTS;

export default function ShopPick() {
  return (
    <div className={ShopPickStyle['shop-pick']}>
      <div className={ShopPickStyle["shop-info"]}>
        <h3>Shop our picks</h3>
        <p>
          Share information about your brand with your customers. Describe a
          product, make announcements, or welcome customers to your store.
        </p>
      </div>
      <div className={ShopPickStyle["shop__products"]}>
        <div className={ShopPickStyle["product-card__list"]}>
          {products.slice(0, 6).map((product) => (
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
