"use client";
import { useState } from "react";
import Image from "next/image";
import BannerMobileStyle from "./../../styles/homepage/hero-banner.module.css";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";

interface HeroProps {
  bannersMobile: any
}

export default function BannerMobileSlider({ bannersMobile}: HeroProps) {
  const [bannerMobileIndex, setBannerMobileIndex] = useState(0);

    function handleNextBanner(){
        setBannerMobileIndex(index => {
            if (index === bannersMobile.length -1 ) {
                return 0
            } return index + 1
        })
    }

    function handlePrevBanner(){
        setBannerMobileIndex (index => {
            if (index === 0){
                return bannersMobile.length - 1
            } return index -1  
        })
    }
 
  return (
    <div className={BannerMobileStyle['banner__mobile']}>
      <div className={BannerMobileStyle['banner-group']}>
        {bannersMobile.map(({url, alt}: any) => (
          <Image
            key={url}
            src={url}
            alt={alt}
            width={parseInt(BannerMobileStyle["banner-imgWidth"])}
            height={parseInt(BannerMobileStyle["banner-imgHeight"])}
            className={BannerMobileStyle["banner-img"]}
            style={{translate: `${-100 * bannerMobileIndex}%`}}
          />
        ))}
      </div>
      <div className={BannerMobileStyle["slider__control"]}>
        <button
          className={BannerMobileStyle["slider-btn"]}
          onClick={handlePrevBanner}
        >
          <FaChevronLeft />
        </button>
        <div>
          {bannersMobile.map((_ : any, index : any) => (
            <button 
              key={index}
              className={BannerMobileStyle['slider-dot']}
              onClick={() => setBannerMobileIndex(index)}
            >
              {index === bannerMobileIndex ? <FaCircle /> : <FaCircle style={{color: "#c7c7c7"}} />}
            </button>
          ))}
        </div>
      
        <button
          className={BannerMobileStyle["slider-btn"]}
          onClick={handleNextBanner}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
