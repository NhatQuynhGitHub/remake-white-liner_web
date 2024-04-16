"use client";
import Image from "next/image";
import InstagramFeedStyle from "@/styles/homepage/instagram-feed.module.css";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
// import box1 from "./../../../public/images/instagram-box1.jpg";
// import box2 from "./../../../public/images/instagram-box2.jpg";
// import box3 from "./../../../public/images/instagram-box3.jpg";
// import box4 from "./../../../public/images/instagram-box4.jpg";
// import box5 from "./../../../public/images/instagram-box5.jpg";

const InstagramBoxes = [
  {
    id: 1,
    scr: "/images/instagram-box1.jpg",
    alt: "Instagram tag 1",
  },
  {
    id: 2,
    scr: "/images/instagram-box2.jpg",
    alt: "Instagram tag 2",
  },
  {
    id: 3,
    scr: "/images/instagram-box3.jpg",
    alt: "Instagram tag 3",
  },
  {
    id: 4,
    scr: "/images/instagram-box4.jpg",
    alt: "Instagram tag 1",
  },
  {
    id: 5,
    scr: "/images/instagram-box5.jpg",
    alt: "Instagram tag 5",
  },
];
export default function InstagramFeed() {
  const [boxIndex, setBoxIndex] = useState(0);
  const [ShowWindow, setShowWindow] = useState(false);

  const handleInstagramBoxes = (index: any) => {
    setShowWindow(!ShowWindow);
    setBoxIndex(index);
  };

  const instagramBox = InstagramBoxes[boxIndex];

  return (
    <div className={InstagramFeedStyle["instagram-feed"]} >
      <ul className={InstagramFeedStyle["instagram-feed__list"]}>
        {InstagramBoxes.map((box, index) => (
          <li
            key={box.id}
            className={InstagramFeedStyle["instagram-feed__item"]}
            onClick={() => handleInstagramBoxes(index)}
          >
            {<InstagramFeedBox src={box.scr} alt={box.alt} />}
          </li>
        ))}
      </ul>
      {ShowWindow && boxIndex !== null && (
        <div className={InstagramFeedStyle["instagram-feed__window"]}>
          <div className={InstagramFeedStyle['container']}>
            <div
              className={InstagramFeedStyle["instagram-feed__window__header"]}
            >
              <FaInstagram
                className={
                  InstagramFeedStyle["instagram-feed__window__header-icon"]
                }
              />
              <Link
                href="/"
                className={
                  InstagramFeedStyle["instagram-feed__window__header-label"]
                }
              >
                <span>white_linen31</span>
              </Link>
              <button
                className={
                  InstagramFeedStyle["instagram-feed__window__header-btn-close"]
                }
              >
                <IoIosClose onClick={() => setShowWindow(false)} />
              </button>
            </div>
            <div
              className={InstagramFeedStyle["instagram-feed__window__detail"]}
            >
              <div
                className={
                  InstagramFeedStyle["instagram-feed__window__detail-img"]
                }
              >
                <Image
                  src={instagramBox.scr}
                  alt={"Present for" + " " + instagramBox.alt}
                  width={1000}
                  height={1000}
                  className={InstagramFeedStyle["instagram-feed__window-img"]}
                />
              </div>
              <div
                className={
                  InstagramFeedStyle["instagram-feed__window__detail-content"]
                }
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  explicabo officiis nisi laborum, repudiandae, quam
                  necessitatibus quas cum voluptate architecto sit voluptatibus
                  nam ex? Tenetur at aliquid recusandae explicabo ratione?
                </p>
              </div>
            </div>
          </div>
        </div>
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
