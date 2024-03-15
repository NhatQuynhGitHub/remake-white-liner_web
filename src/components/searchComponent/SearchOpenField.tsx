'use client'
import { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import SearchView from "./SearchView";
import SearchFieldOpenStyle from '@/styles/search-style.module.css'

export default function SearchOpenField(){
    const [showSearchView, setShowSearchView] = useState(false)
    
    return (
        <div>
            <div>
                {!showSearchView && (
                    <button 
                        className={SearchFieldOpenStyle["search__field--open-btn"]}
                        onClick={() => setShowSearchView(true)}
                    >
                        <IoSearch />
                    </button>
                )}

                {showSearchView && (
                    <button 
                        className={SearchFieldOpenStyle["search__field--close-btn"]}
                        onClick={() => setShowSearchView(false)}
                    >
                        <IoClose />
                    </button>
                )}
            </div>

            {showSearchView && <SearchView />}
        </div>
    )
}