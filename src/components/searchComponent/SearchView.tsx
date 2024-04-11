import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchProductsTable from "./SearchProductsTable";
import SearchViewStyle from '@/styles/search-style.module.css'


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

    return (
        <div className={SearchViewStyle["search__view"]}>
            <SearchBar 
                value={filterText}
                onFilterTextChange={setFilterText}
                onClear={() => setFilterText('')}
            />
            {filterText && (
                <div>
                    <SearchProductsTable
                        filterText={filterText}
                        texting={filterText}    
                    />    
                </div>
            )}
        </div>
    )
}