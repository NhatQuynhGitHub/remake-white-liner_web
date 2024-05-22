import ShopStyle from "@/styles/shop/shop.module.css";
import Collections from "@/api/products.json";
import Products from "@/api/products.json";
import CardProduct from "@/components/CardProduct";
import FacetProduct from "@/components/collection/FacetProduct";

const collections = Collections.COLLECTIONS;
const products = Products.PRODUCTS;

export function generateStaticParams() {
  return collections.map((collection: any) => ({
    category: collection.category,
  }));
}

export default function CollectionsCategory({
  params,
}: {
  params: { category: string };
}) {
  
 

  const product = products.filter((item) => {
    if (typeof item.category === "string") {
      return item.category === params.category.replace("-", " ");
    } else if (Array.isArray(item.category)) {
      if (params.category.replace("-", " ") === "bestsellers")
        return item.category.includes("bestsellers");
      else if (params.category.replace("-", " ") === "for home")
        return item.category.includes("for home");
    }
    return false;
  });

  const productCount = product.length;
  const outOfProductCount = product.filter((item) => item.stock === 0).length;
  const highestPriceOfProduct = product.reduce((max, item) => {
    return item.price > max ? item.price : max;
  }, 0);


  

  return (
    <div>
      <section className={ShopStyle["shop__page--banner"]}>
        <h1>{params.category.replace("-", " ")}</h1>
      </section>
      <section className={ShopStyle["container"]}>
        <FacetProduct
          quantityProducts={productCount}
          outOfStockCount={outOfProductCount}
          highestPrice={highestPriceOfProduct}
        />
      </section>
      <section className={ShopStyle["container"]}>
        <ul className={ShopStyle["shop__card-product--list"]}>
          {product.map((item) => (
            <li key={item.id} className={ShopStyle["shop__card-product--item"]}>
              <CardProduct
                src={item.images}
                alt={item.title}
                title={item.title}
                price={item.price}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
