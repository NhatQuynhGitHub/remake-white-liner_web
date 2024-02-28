'use client'
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchField from "./SearchField";
import SearchFieldOpenBtnStyle from '@/styles/search-style.module.css'

export default function SearchOpenField(){
    const [showSearchField, setShowSearchField] = useState(false)
    return (
        <div>
            <div>
            <button 
                className={SearchFieldOpenBtnStyle["search__field--open-btn"]}
                onClick={() => {
                    setShowSearchField(!showSearchField)
                }}
            >
                <IoSearch />
            </button>
            { showSearchField &&
                <SearchField />
            }
            </div>
           
        
            
        </div>
    )
}