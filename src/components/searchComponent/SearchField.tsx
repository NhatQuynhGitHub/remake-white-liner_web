import SearchBar from "./SearchBar";
import SearchProductsTable from "./SearchProductsTable";
import SearchView from "./SearchView";
import SearchFieldStyle from '@/styles/search-style.module.css'
import LineDivideStyle from '@/styles/search-style.module.css'

export default function SearchField(){
    return (
        <div className={SearchFieldStyle["search__field"]}>
            <SearchBar />
            <hr className={LineDivideStyle['line-divide']} />
            <SearchProductsTable />
            <SearchView />
        </div>
    )
}