"use client";
import { useState } from "react";
import Image from "next/image";
import BannerStyle from "./../../styles/homepage/hero-banner.module.css";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";

interface HeroProps {
  banners: any
}

export default function BannerSlider({ banners}: HeroProps) {
  const [bannerIndex, setBannerIndex] = useState(0);

    function handleNextBanner(){
        setBannerIndex(index => {
            if (index === banners.length -1 ) {
                return 0
            } return index + 1
        })
    }

    function handlePrevBanner(){
        setBannerIndex (index => {
            if (index === 0){
                return banners.length - 1
            } return index -1  
        })
    }
 
  return (
    <div className={BannerStyle['banner']}>
      <div className={BannerStyle['banner-group']}>
        {banners.map(({url, alt}: any) => (
          <Image
            key={url}
            src={url}
            alt={alt}
            width={parseInt(BannerStyle["banner-imgWidth"])}
            height={parseInt(BannerStyle["banner-imgHeight"])}
            className={BannerStyle["banner-img"]}
            style={{translate: `${-100 * bannerIndex}%`}}
          />
        ))}
      </div>
      <div className={BannerStyle["slider__control"]}>
        <button
          className={BannerStyle["slider-btn"]}
          onClick={handlePrevBanner}
        >
          <FaChevronLeft />
        </button>
        <div>
          {banners.map((_ : any, index : any) => (
            <button 
              key={index}
              className={BannerStyle['slider-dot']}
              onClick={() => setBannerIndex(index)}
            >
              {index === bannerIndex ? <FaCircle /> : <FaCircle style={{color: "#c7c7c7"}} />}
            </button>
          ))}
        </div>
      
        <button
          className={BannerStyle["slider-btn"]}
          onClick={handleNextBanner}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
