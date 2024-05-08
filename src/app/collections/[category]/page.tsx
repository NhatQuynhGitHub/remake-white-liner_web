import Collections from "@/api/products.json";
import Products from "@/api/products.json";
import CardProduct from "@/components/CardProduct";

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
    if (typeof item.category === 'string') {
        return item.category === params.category.replace("-", " ");
    } else if ( Array.isArray(item.category)) {
        if (params.category.replace("-", " ") === "bestsellers") return item.category.includes('bestsellers')
        else if (params.category.replace("-", " ") === "for home") return item.category.includes('for home')
    }
    return false
})

console.log("QQQQQ:", (params.category.replace("-", " ")))
console.log("PRODUCT:", product)

  return (
    <div>
      <h1>{params.category.replace("-", " ")}</h1>
      <ul style={{ display: "flex" }}>
        {product.map(item => (
          <li key={item.id}>
            <CardProduct
              src={item.images}
              alt={item.title}
              title={item.title}
              price={item.price}
            />
            <p>{item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
