"use client";
import ShopFilterStyle from "@/styles/shop/shop-facet.module.css";
interface RangePriceProps {
  fieldLabel: string;
  //   rangePrice: number;
  highestPrice: number;
  onChangeHandle: any;
  idRange: string;
}

export function RangePrice({
  fieldLabel,
  //   rangePrice,
  highestPrice,
  onChangeHandle,
  idRange,
}: RangePriceProps) {
  return (
    <div className={ShopFilterStyle["price__range"]}>
      <span>$</span>
      <div className={ShopFilterStyle["price__range--wrapper"]}>
        <input
          id={idRange}
          type="number"
          required
          min={0}
          name={fieldLabel}
          max={highestPrice}
          //   value={rangePrice}
          onChange={onChangeHandle}
          // placeholder={fieldLabel}
          className={ShopFilterStyle["price__range--input"]}
        />

        <label
          htmlFor={idRange}
          data-content={fieldLabel}
          className={ShopFilterStyle["price__range--label"]}
        >
          {fieldLabel}
        </label>
      </div>
    </div>
  );
}
