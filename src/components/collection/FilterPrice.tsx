"use client";
import { useEffect, useRef, useState } from "react";
import ShopStyle from "@/styles/shop/shop-facet.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RangePrice } from "./RangePrice";

interface FilterPriceProps {
  highestPrice: number;
  maxPrice: number;
  minPrice: number;
  onChangeMin: any;
  onChangeMax: any;
}

export function FilterPrice({
  highestPrice,
  maxPrice,
  minPrice,
  onChangeMin,
  onChangeMax,
}: FilterPriceProps) {
  const [filterPrice, setFilterPrice] = useState(true);
   const refClose = useRef<HTMLDivElement>(null);

   useEffect(() => {
    const closeDropDownFilter = (event: MouseEvent) => {
      if (!refClose.current?.contains(event.target as Node)) {
        setFilterPrice(true)
      }
    }; 
    document.addEventListener("mousedown",closeDropDownFilter)
    return () => {
      document.removeEventListener("mousedown", closeDropDownFilter)
    }
   }, [refClose])

  return (
    <div ref={refClose}>
      <div >
        <button
          onClick={() => setFilterPrice(!filterPrice)}
          className={`${ShopStyle["filter-state__price"]} ${ShopStyle["filter-state--dropdown-tab"]}`}
        >
          <span>
            Price <RiArrowDropDownLine />
          </span>
        </button>
        {!filterPrice && (
          <div
            className={`${ShopStyle["filter__dropdown"]} ${ShopStyle["filter__price-dropdown"]}`}
          >
            <div
              className={`${ShopStyle["filter__dropdown--select"]} ${ShopStyle["filter__price__dropdown--select"]}`}
            >
              <p>The highest price: {highestPrice}$ </p>
              <button className={ShopStyle["filter--btn-reset"]}>Reset</button>
            </div>
            <hr />
            <div>
              <div className={`${ShopStyle["filter__price__dropdown--stock"]}`}>
               <RangePrice 
               fieldLabel="from"
              //  rangePrice={maxPrice}
               highestPrice={highestPrice}
               onChangeHandle={onChangeMax}
               idRange='max-price'
               />
               <RangePrice 
               fieldLabel="to"
              //  rangePrice={minPrice}
               highestPrice={highestPrice}
               onChangeHandle={onChangeMin}
               idRange="min-price"
               />

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}





