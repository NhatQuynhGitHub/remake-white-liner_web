"use client";
import ShopFacetStyle from "@/styles/shop/shop-facet.module.css";
import { useState, useEffect, useRef } from "react";
import FilterState from "./FilterState";
import { FilterPrice } from "./FilterPrice";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
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
  const [openFacetMobile, setOpenFacetMobil] = useState(false);
  const refModalFacetMobile = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const CloseFacetMobile = (event: MouseEvent) => {
      if (!refModalFacetMobile.current?.contains(event.target as Node)) {
        setOpenFacetMobil(false);
      }
    };
    document.addEventListener("mousedown", CloseFacetMobile);
    return () => {
      document.removeEventListener("mousedown", CloseFacetMobile);
    };
  }, [refModalFacetMobile]);

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
      <div
        className={`${ShopFacetStyle["facet-wrapper"]} ${ShopFacetStyle["facet__fullscreen"]}`}
      >
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
            <select
              name="best selling"
              className={ShopFacetStyle["sort-by__selection"]}
            >
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

      <div className={`${ShopFacetStyle["facet__mobile"]}`}>
        <div>
          <button
            onClick={() => setOpenFacetMobil(!openFacetMobile)}
            className={`${ShopFacetStyle["btn__facet-adjust"]}`}
          >
            <HiOutlineAdjustmentsHorizontal />
            <span>Filter and sort filter</span>
          </button>
        </div>
        {openFacetMobile && (
          <div className={ShopFacetStyle["modal-fact-mobile"]}>
            <div
              className={ShopFacetStyle["facet__section"]}
              ref={refModalFacetMobile}
            >
              <div>
                <section className={ShopFacetStyle["facet-mobile__header"]}>
                  <div
                    className={ShopFacetStyle["facet-mobile__header--heading"]}
                  >
                    <h4>Filter and sort</h4>
                    <p>{quantityProducts} Products</p>
                  </div>
                  <button
                    className={ShopFacetStyle["btn__facet-mobile-close"]}
                    style={{cursor: "pointer"}}
                    onClick={() => setOpenFacetMobil(false)}
                  >
                    <IoIosClose />
                  </button>
                </section>
                <hr style={{ color: "var(--text-tertiary-color)" }} />
                <section>
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
                <section>
                  <div className={ShopFacetStyle["section_sort-by"]}>
                    <h4 className={ShopFacetStyle["section_title-tab"]}>
                      Sort by:
                    </h4>
                    <div>
                      <select
                        name="best selling"
                        className={ShopFacetStyle["sort-by__selection"]}
                      >
                        <option value="">Best selling</option>
                        <option value="">Price: Low to high</option>
                        <option value="">Price: high to low</option>
                        <option value="">Alphabetically</option>
                        <option value="">Date</option>
                      </select>
                    </div>
                  </div>
                </section>
              </div>
              <div className={ShopFacetStyle["facet-mobile__footer"]}>
                <button
                  className={`${ShopFacetStyle["facet-mobile__btn"]} ${ShopFacetStyle["btn-apply"]}`}
                >
                  Apply
                </button>
                <button
                  className={`${ShopFacetStyle["facet-mobile__btn"]} ${ShopFacetStyle["btn-remove"]}`}
                >
                  Remove all
                </button>
              </div>
            </div>
          </div>
        )}
        <div>
          <h4 className={ShopFacetStyle["section_title-tab"]}>
            {quantityProducts} Products
          </h4>
        </div>
      </div>
    </div>
  );
}
