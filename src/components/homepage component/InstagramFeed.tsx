"use client";
import Image from "next/image";
import InstagramFeedStyle from "@/styles/homepage/instagram-feed.module.css";
import { useState } from "react";

import InstagramWindowSlider from "./InstagramWindowSlider";
import { FaInstagram } from "react-icons/fa";

const InstagramBoxes = [
  {
    id: 1,
    scr: "/images/instagram-box1.jpg",
    alt: "Instagram tag 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo officiis nisi laborum, repudiandae, quam necessitatibus quas cum voluptate architecto sit voluptatibus nam ex? Tenetur at aliquid recusandae explicabo ratione? ",
      date: "Fer 07, 2023"
    },
    {
      id: 2,
      scr: "/images/instagram-box2.jpg",
      alt: "Instagram tag 2",
      content:
      "Lorem ipsum dolor sit",
      date: "may 03, 2023"
    },
    {
      id: 3,
      scr: "/images/instagram-box3.jpg",
      alt: "Instagram tag 3",
      content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo ",
      date: "may 05, 2023"
    },
    {
      id: 4,
      scr: "/images/instagram-box4.jpg",
      alt: "Instagram tag 1",
      content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      date: "june 03, 2023"
    },
    {
      id: 5,
      scr: "/images/instagram-box5.jpg",
      alt: "Instagram tag 5",
      content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo officiis nisi laborum, repudiandae, quam necessitatibus quas cum voluptate architecto sit voluptatibus nam ex? Tenetur at aliquid recusandae explicabo ratione? ",
      date: "oct 30, 2023"
  },
];
export default function InstagramFeed() {
  const [ShowWindow, setShowWindow] = useState(false);
  const [boxIndex, setBoxIndex] = useState(0);

 function handleInstagramBoxes (index: any){
    setShowWindow(!ShowWindow);
    setBoxIndex(index);
  };

  function NextBox() {
    setBoxIndex((index) => {
      if (index === 0) return InstagramBoxes.length - 1;
      return index - 1;
    });
  }
  function PrevBox() {
    setBoxIndex((index) => {
      if (index === InstagramBoxes.length - 1) return 0;
      return index + 1;
    });
  }
  return (
    <div className={InstagramFeedStyle["instagram-feed"]}>
      <ul className={InstagramFeedStyle["instagram-feed__list"]}>
        {InstagramBoxes.map((box: any, index: any) => (
          <li
            key={index}
            className={InstagramFeedStyle["instagram-feed__item"]}
            onClick={() => handleInstagramBoxes(index)}
          >
             <InstagramFeedBox src={box.scr} alt={box.alt} />  
          </li>
        ))}
      </ul>
      {ShowWindow && (
        <InstagramWindowSlider
          InstagramBoxes={InstagramBoxes}
          boxIndex={boxIndex}
          handleCloseWindow={() => setShowWindow(false)}
          onNextBox={NextBox}
          onPrevBox={PrevBox}
        />
      )}
    </div>
  );
}

interface InstagramFeedBoxProps {
  src: string;
  alt: string;
}
export function InstagramFeedBox({ src, alt }: InstagramFeedBoxProps) {
  return (
    <div className={InstagramFeedStyle["instagram-feed__item-box"]}>
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className={InstagramFeedStyle["instagram--box-img"]}
      />
      <div className={InstagramFeedStyle["instagram--box-icon"]}>
        <FaInstagram />
      </div>
    </div>
  );
}
