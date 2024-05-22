"use client"
import { useEffect, useRef, useState } from "react";
import ShopStyle from "@/styles/shop/shop-facet.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";

interface FilterStateProps {
    productInStock: number;
    outOfStockCount: number
}

export default function FilterState({productInStock, outOfStockCount}: FilterStateProps) {
  const [filterAvailable, setFilterAvailable] = useState(true);
  const refClose = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleCloseDropdown = (event: MouseEvent) => {
      if (!refClose.current?.contains(event.target as Node)) {
        setFilterAvailable(true)
      }
    }; 
    document.addEventListener("mousedown", handleCloseDropdown)
    return () => {
      document.removeEventListener("mousedown", handleCloseDropdown)
    }
  }, [refClose])

  return (
    <div>
      <div ref={refClose} style={{ display: "flex" }} >
        <div style={{position:"relative"}}>
          <button
            className={`${ShopStyle["filter-state__available"]} ${ShopStyle['filter-state--dropdown-tab']}`}
            onClick={() => setFilterAvailable(!filterAvailable)}
          >
            <span>
              Availability <RiArrowDropDownLine />
            </span>
          </button>
          {!filterAvailable && (
            <div className={`${ShopStyle["filter__dropdown"]} ${ShopStyle["filter__available-dropdown"]}`}>
              <div className={`${ShopStyle["filter__dropdown--select"]} ${ShopStyle["filter__available__dropdown--select"]}`}>
                <p>0 Select</p>
                <button className={ShopStyle['filter--btn-reset']}>Reset</button>
              </div>
              <hr />
              <form className={`${ShopStyle["filter__available__dropdown--stock"]} ${ShopStyle["filter__dropdown--stock"]}`}>
                <label htmlFor="in-stock">
                  <input type="checkbox" /> In stock ({productInStock})
                </label>
                <label htmlFor="out-of-stock" className={`${productInStock > 0 ? ShopStyle['stock-disabled'] : ""}`}>
                  <input type="checkbox" /> Out of stock ({outOfStockCount})
                </label>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
