import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchProductsTable from "./SearchProductsTable";
import SearchViewStyle from '@/styles/search-style.module.css'
// import productsInfo from '@/api/products.json'


// const rawProducts = productsInfo.PRODUCTS as Product[]
// const Keywords = productsInfo.KEYWORDS

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



export default function SearchView(){
    const [ filterText, setFilterText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    // const [products, setProducts] = useState(rawProducts)
    // const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchText(e.target.value)
    // }  

    useEffect(() => {
        console.log(filterText, "let's search for something")
        // const productsData = products.foreach(product) => {
        // }
        // })
    }, [filterText])

    const onSearch = (searchResults: any) => {
        setFilterText(searchResults)
        // our api to fetch the search result

        console.log( 'search', searchResults)
    }

    return (
        <div className={SearchViewStyle["search__view"]}>
            <SearchBar 
                value={filterText}
                onFilterTextChange={setFilterText}
                // onSearchResultChange={setSearchResults}
                onClear={() => setFilterText('')}
                // onSelect={(products) => selectedProductItem}
            />
            <hr className={SearchViewStyle['line-divide']} />
            <div>
                    <SearchProductsTable
                        filterText={filterText}
                        texting={filterText}    
                    />    
                     
            </div>
        </div>
    )
}