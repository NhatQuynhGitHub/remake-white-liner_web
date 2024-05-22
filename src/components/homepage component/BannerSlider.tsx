"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import BannerStyle from "./../../styles/homepage/hero-banner.module.css";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";

interface HeroProps {
  banners: any;
}

export default function BannerSlider({ banners }: HeroProps) {
  const [bannerIndex, setBannerIndex] = useState(0);

  function schedule() {
    console.log("1");
    wait(10 * 1000).then(() => {
      console.log("2");
    });
  }

  function changeSlideAuto() {
    setInterval(() => {
      handlePrevBanner();
    }, 5 * 1000);
  }

  useEffect(() => {
    schedule();
    changeSlideAuto();
  }, );

  function wait(seconds: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("time up");
      }, seconds);
    });
  }

  function handleNextBanner() {
    setBannerIndex((index) => {
      if (index === banners.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }

  function handlePrevBanner() {
    setBannerIndex((index) => {
      if (index === 0) {
        return banners.length - 1;
      }
      return index - 1;
    });
  }
  console.log("aaa:", banners);

  return (
    <div className={BannerStyle["banner"]}>
      <div className={BannerStyle["banner-group"]}>
        {banners.map((banner: any) => (
          <Image
            priority
            key={banner.id}
            src={banner.url}
            alt={banner.alt}
            width={1400}
            height={1000}
            className={BannerStyle["banner-img"]}
            style={{ translate: `${-100 * bannerIndex}%` }}
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
          {banners.map((_: any, id: any) => (
            <button
              key={id}
              className={BannerStyle["slider-dot"]}
              onClick={() => setBannerIndex(id)}
            >
              {id === bannerIndex ? (
                <FaCircle />
              ) : (
                <FaCircle style={{ color: "#c7c7c7" }} />
              )}
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
