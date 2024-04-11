"use client";
import { useState } from "react";
import CardBlog from "./CardBlog";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HomeStyle from "@/styles/homepage/homepage.module.css";

interface CardBlogSliderProps {
  cardBlogs: any;
}

export default function CardBlogSlider({ cardBlogs }: CardBlogSliderProps) {
  const [cardIndex, setCardInder] = useState(0);

  function nextArticleCard(){
    setCardInder(index => {
        if (index === cardBlogs.length -1 ) return 0
        return index + 1
    })
  }
  function prevArticleCard(){
    setCardInder(index => {
        if (index === 0 ) return cardBlogs.length - 1
        return index - 1
    })
  }
  return (
    <div className={HomeStyle["article__slider__card-blog"]}>
        <div className={HomeStyle['article__slider__card-blog--list']}>
            {cardBlogs.map((cardBlog: any, index: any) => (
                <div 
                    key={index}
                    className={HomeStyle['article__slider__card-blog--list-item']}
                >
                    {cardBlog}
                </div>
            ))}
        </div>

        <div className={HomeStyle['article__slider--control']}>
            <button 
                onClick={nextArticleCard}
                className={HomeStyle['article__slider--control-btn']}>
                <FaChevronLeft />
            </button>
            <button 
                onClick={prevArticleCard}
                className={HomeStyle['article__slider--control-btn']}>
                <FaChevronRight />
            </button>
        </div>
    </div>
  );
}
