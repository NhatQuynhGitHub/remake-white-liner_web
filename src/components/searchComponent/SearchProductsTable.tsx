import LineDivideStyle from '@/styles/search-style.module.css'
import ProductsTableStyle from '@/styles/search-style.module.css'
import ContainerStyle from '@/styles/search-style.module.css'
import {PRODUCTS, KEYWORDS} from '@/api/products.json'
import Image from 'next/image'

const Products = PRODUCTS
const Keywords = KEYWORDS

export interface Product {
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

interface SearchProductsTableProps{
    // products: Product[]
    // onSearch: (searchTerm: string) => void
    texting?: string
}

// export default function SearchProductsTable({ products, onSearch, texting } : SearchProductsTableProps) 

export default function SearchProductsTable({texting}: SearchProductsTableProps){
    return (
        <div className={ProductsTableStyle['products__table']}>
            <div className={ProductsTableStyle['container']}>
                <div>
                    <h3>Suggestion</h3>
                    <hr className={LineDivideStyle['line-divide']} />
                    <ul>
                        {Keywords.map(keyword => (
                            <li key={keyword.category}>
                                <strong>{keyword.category}:</strong>
                                <ul>
                                    {keyword.items.map(item => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Products</h3>
                    <hr className={LineDivideStyle['line-divide']} />
                    <ul>
                        {Products.map(product =>
                            <li key={product.id}>
                                <p>{product.title}</p>
                                <Image 
                                    src={product.images}
                                    alt={product.title}
                                    width={100}
                                    height={100}
                                />
                            </li>
                        )}
                    </ul>
                </div>
                <div className={ContainerStyle['container']}>
                    <p>Searching for {texting}</p>
                </div>
            </div>
        </div>
    )
}