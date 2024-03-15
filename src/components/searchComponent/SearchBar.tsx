"use client";
import { IoClose, IoSearch } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import SearchView from "./SearchView";
// CSS
import SearchBarStyle from "@/styles/search-style.module.css";
import SearchProductsTable, { Product } from "./SearchProductsTable";
import { useState } from "react";

interface SearchBarProps {
  textValue?: string;
  onClick: () => void;
  onSearchTextChange: any;
  onSearchResultChange: any;
  products: Product[];
  onClear: () => void;
}

export default function SearchBar({
  textValue,
  onClick,
  onSearchTextChange,
  onSearchResultChange,
  onClear,
  products,
}: SearchBarProps) {
  console.log("products SearchBar", products);

  return (
    <>
      <div className={SearchBarStyle["container"]}>
        <div className={SearchBarStyle["search__bar"]}>
          <div className={SearchBarStyle["search__bar--detail"]}>
            <div
              className={SearchBarStyle["search__bar--field-input"]}
            >
              <form className={SearchBarStyle["search--form-input"]}>
                <input
                  type="text"
                  value={textValue}
                  onChange={(e) => onSearchTextChange(e.target.value)}
                  className={SearchBarStyle["search--input-tab"]}
                />
                <label
                  htmlFor="search"
                  className={SearchBarStyle["input-label"]}
                >
                  Search
                </label>
              </form>
              <button
                className={SearchBarStyle["btn-del-text"]}
                onClick={onClear}
              >
                <IoIosCloseCircleOutline />
              </button>
              <button>
                <IoSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
