"use client";
import Products from "@/api/products.json";
import CardProduct from "../CardProduct";
import ShopPickStyle from "@/styles/homepage/shop-pick.module.css";
import DotStyle from "@/styles/homepage/hero-banner.module.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";
const products = Products.PRODUCTS;

export default function ShopPickProductSlider() {
  const [productIndex, setProductIndex] = useState(0);
  function handleNextProduct() {
    console.log(setProductIndex)
    setProductIndex((index) => {
      if (index === products.length - 1) return 0;
      return index + 1;
    });
  }
  function handlePrevProduct() {
    setProductIndex((index) => {
      if (index === 0) return products.length - 1;
      return index - 1;
    });
  }
  return (
    <>
      <div className={ShopPickStyle["shop__products--slider"]}>
        <div className={ShopPickStyle["product-card--slider__list"]}>
          {products.slice(0, 6).map((product) => (
            <div
            key={product.id}
            className={ShopPickStyle["product-card--slider__item"]}
            >
              <CardProduct
                src={product.images}
                alt={product.title}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={ShopPickStyle["slider__control"]}>
        <button
            // className={["slider-btn"]}
            onClick={handlePrevProduct}
        >
            <FaChevronLeft />
        </button>
        {products.slice(0, 6).map((_: any, id: any) => (
          <button
            key={id}
            onClick={() => setProductIndex(id)}
            className={DotStyle["slider-dot"]}
          >
            {id === productIndex ? (
              <FaCircle />
            ) : (
              <FaCircle style={{ color: "#c7c7c7" }} />
            )}
          </button>
        ))}
        <button
            // className={["slider-btn"]}
            onClick={handlePrevProduct}
        >
            <FaChevronRight />
        </button>
      </div>
    </>
  );
}
