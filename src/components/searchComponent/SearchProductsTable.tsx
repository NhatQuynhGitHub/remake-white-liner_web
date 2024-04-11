import LineDivideStyle from "@/styles/search-style.module.css";
import ProductsTableStyle from "@/styles/search-style.module.css";
import ContainerStyle from "@/styles/search-style.module.css";
import productsInfo from "@/api/products.json";
import Image from "next/image";

const Products = productsInfo.PRODUCTS;
const Keywords = productsInfo.KEYWORDS;

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: string;
  stock: number;
  category: string;
  thumbnail: string;
  images: string;
}

interface SearchProductsTableProps {
  texting?: string;
  filterText: any
}


interface ProductsItemProps {
  product: any;
}

function ProductsItem({ product }: ProductsItemProps) {
  return (
    <>
      <p>{product.title}</p>
      <Image
        src={product.images}
        alt={product.title}
        width={100}
        height={100}
      />
    </>
  );
}

export default function SearchProductsTable({
  texting, filterText
}: SearchProductsTableProps) {
  return (
    <div className={ProductsTableStyle["products__table"]}>
      <div className={ProductsTableStyle["container"]}>
        <div>
          <h3>Suggestion</h3>
          <ul>
            {Keywords.map((keyword) => (
                <li key={keyword.category}>
                  { keyword.items
                    .filter(((item) => item.toLowerCase().includes(filterText.toLowerCase())))
                    .slice(0, 1)
                    .map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Products</h3>
          <ul>
            {Products
                .filter((product) => (product.title.toLowerCase().includes(filterText.toLowerCase())))
                .slice(0, 2)
                .map((product) => (
                <ProductsItem key={product.id} product={product} />)
            )}
          </ul>
        </div>
        <div className={ContainerStyle["container"]}>
            <p>Searching for &quot;{texting}&quot;</p>
        </div>
      </div>
    </div>
  );
}
