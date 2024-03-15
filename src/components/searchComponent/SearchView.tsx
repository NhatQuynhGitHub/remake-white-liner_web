import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchProductsTable from "./SearchProductsTable";
import SearchViewStyle from '@/styles/search-style.module.css'
import {PRODUCTS, KEYWORDS} from '@/api/products.json'


const rawProducts = PRODUCTS as Product[]
const keywords = KEYWORDS

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

interface Keyword {keyword: string}

interface SearchViewProps {
    keywords : Keyword[]
}

export default function SearchView(){
    const [searchResults, setSearchResults] = useState([])
    const [ searchText, setSearchText] = useState('')
    const [products, setProducts] = useState(rawProducts)
    const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }  

    useEffect(() => {
        console.log(searchText, "let's search for something")
        // const productsData = products.foreach(product) => {
        // }
        // })
    }, [searchText])

    const onSearch = (searchResults: any) => {
        setSearchText(searchResults)
        // our api to fetch the search result

        console.log( 'search', searchResults)
    }

    return (
        <div className={SearchViewStyle["search__view"]}>
            <SearchBar 
                textValue={searchText}
                onSearchTextChange={setSearchText}
                onSearchResultChange={setSearchResults}
                onClick={() => onSearch(searchText)}
                onClear={() => setSearchText('')}
                products={products}
            />
            <hr className={SearchViewStyle['line-divide']} />
            <div>
                {
                    <SearchProductsTable
                        // products={products}
                        // onSearch={onSearch} 
                        texting={searchText}    
                    />    
                }     
            </div>
        </div>
    )
}