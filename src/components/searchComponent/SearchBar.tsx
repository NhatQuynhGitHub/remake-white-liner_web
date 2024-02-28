'use client'
import { useState } from "react"
import { IoClose, IoSearch } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
// CSS
import '@/styles/search-style.module.css'
import SearchBarStyle from "@/styles/search-style.module.css"
import SearchBarDetailStyle from "@/styles/search-style.module.css"
import SearchBarFieldInputStyle from "@/styles/search-style.module.css"
import SearchInputTabStyle from "@/styles/search-style.module.css"
import SearchFormInputStyle from "@/styles/search-style.module.css"
import BtnDelTextStyle from '@/styles/search-style.module.css'
import SearchFieldCloseBtnStyle from '@/styles/search-style.module.css'
import ContainerStyle from '@/styles/search-style.module.css'
import SearchInputLabel from '@/styles/search-style.module.css'


export default function SearchBar(){
  const [searchText, setSearchText] = useState('')
  function onChange(){
    
  }
    return (
        <>
            <div className={ContainerStyle['container']}>
                <div className={SearchBarStyle['search__bar']}>
                    <div className={SearchBarDetailStyle['search__bar--detail']}>
                        <div className={SearchBarFieldInputStyle['search__bar--field-input']}>
                            <form className={SearchFormInputStyle['search--form-input']}>
                                <input 
                                    type="text" 
                                    value={searchText}
                                    onChange={onChange}
                                    className={SearchInputTabStyle['search--input-tab']}
                                />
                                <label 
                                    htmlFor="search"
                                    className={SearchInputLabel["input-label"]}
                                >Search</label>
                                <button className={BtnDelTextStyle['btn-del-text']}>
                                    <IoIosCloseCircleOutline />
                                </button>
                            </form>
                            <button>
                                <IoSearch />
                            </button>
                        </div>
                        <button className={SearchFieldCloseBtnStyle["search__field--close-btn"]}>
                            <IoClose />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}