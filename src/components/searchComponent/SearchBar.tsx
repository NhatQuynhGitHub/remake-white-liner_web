"use client";
import {  IoSearch } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
// CSS
import SearchBarStyle from "@/styles/search-style.module.css";

interface SearchBarProps {
  value?: string;
  onFilterTextChange: any;
  onClear: () => void;
}

export default function SearchBar({
  value,
  onFilterTextChange,
  onClear,
}: SearchBarProps) {

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
                  value={value}
                  onChange={(e) => onFilterTextChange(e.target.value)}
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
              <button className={SearchBarStyle['search__bar--btn-search']}>
                <IoSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
