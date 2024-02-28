'use client'
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchTab from "./SearchBar";
import ContainerStyle from '@/styles/search-style.module.css'


export default function SearchView(){
    
    return (
        <div className={ContainerStyle['container']}>
            <p>Searching for ...</p>
        </div>
    )
}