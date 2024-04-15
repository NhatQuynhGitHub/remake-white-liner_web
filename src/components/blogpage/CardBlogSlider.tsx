"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";
import HomeStyle from "@/styles/homepage/homepage.module.css";
import { FaCircleDot } from "react-icons/fa6";

interface CardBlogSliderProps {
  cardBlogs: any;
}

export default function CardBlogSlider({ cardBlogs }: CardBlogSliderProps) {
  const [cardIndex, setCardInder] = useState(0);

  function nextArticleCard() {
    setCardInder((index) => {
      if (index === cardBlogs.length - 1) return 0;
      return index + 1;
    });
  }
  function prevArticleCard() {
    setCardInder((index) => {
      if (index === 0) return cardBlogs.length - 1;
      return index - 1;
    });
  }
  return (
    <div className={HomeStyle["article__slider__card-blog"]}>
      <div className={HomeStyle["article__slider__card-blog--list"]}>
        {cardBlogs.map((cardBlog: any, index: any) => (
          <div
            key={index}
            className={HomeStyle["article__slider__card-blog--list-item"]}
            style={{ transform: `translateX(${-100 * cardIndex}%)` }}
          >
            {cardBlog}
          </div>
        ))}
      </div>

      <div className={HomeStyle["article__slider--control"]}>
        <div className={HomeStyle["article__slider--control-btn"]}>
          <button
            aria-label="View next Card"
            onClick={prevArticleCard}
            className={HomeStyle["article__slider--btn"]}
          >
            <FaChevronLeft />
          </button>

          <button
            aria-label="View previous Card"
            onClick={nextArticleCard}
            className={HomeStyle["article__slider--btn"]}
          >
            <FaChevronRight />
          </button>
        </div>
        <div className={HomeStyle["article__slider--control-dot"]}>
          {cardBlogs.map((_: any, index: any) => (
            <button
              aria-label={`View ${index} card`}
              key={index}
              className={HomeStyle["article__slider--dot"]}
              onClick={() => setCardInder(index)}
            >
             { index === cardIndex ? <FaCircleDot />:<FaCircle /> } 
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
