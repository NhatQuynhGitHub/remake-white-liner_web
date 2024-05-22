"use client";
import ShopFacetStyle from "@/styles/shop/shop-facet.module.css";
import { useState, useEffect } from "react";
import FilterState from "./FilterState";
import { FilterPrice } from "./FilterPrice";
interface FilterProductProps {
  quantityProducts: number;
  outOfStockCount: number;
  highestPrice: number;
}

export default function FacetProduct({
  quantityProducts,
  outOfStockCount,
  highestPrice,
}: FilterProductProps) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    setMaxPrice(highestPrice);
  }, [highestPrice]);

  function handleMaxPrice(event: any) {
    setMaxPrice(event.target.value);
  }

  async function handleMinPrice(event: any) {
    setMinPrice(event.target.value);
  }

  return (
    <div className={ShopFacetStyle["container"]}>
      <div className={`${ShopFacetStyle["facet-wrapper"]}`}>
        <section className={ShopFacetStyle["section_filter"]}>
          <h4 className={ShopFacetStyle["section_title-tab"]}>Filter:</h4>
          <div className={ShopFacetStyle["filter__detail"]}>
            <FilterState
              productInStock={quantityProducts}
              outOfStockCount={outOfStockCount}
            />
            <FilterPrice
              highestPrice={highestPrice}
              maxPrice={maxPrice}
              minPrice={minPrice}
              onChangeMax={handleMaxPrice}
              onChangeMin={handleMinPrice}
            />
          </div>
        </section>

        <section className={ShopFacetStyle["section_sort-by"]}>
          <h4 className={ShopFacetStyle["section_title-tab"]}>Sort by:</h4>
          <div>
            <select name="best selling" id="">
              <option value="">Best selling</option>
              <option value="">Price: Low to high</option>
              <option value="">Price: high to low</option>
              <option value="">Alphabetically</option>
              <option value="">Date</option>
            </select>
          </div>
          <div>
            <h4 className={ShopFacetStyle["section_title-tab"]}>
              {quantityProducts} Products
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
}
