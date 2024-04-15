import Image from "next/image";
import InstagramFeedStyle from '@/styles/homepage/instagram-feed.module.css'
import { FaInstagram } from "react-icons/fa";
// import box1 from "./../../../public/images/instagram-box1.jpg";
// import box2 from "./../../../public/images/instagram-box2.jpg";
// import box3 from "./../../../public/images/instagram-box3.jpg";
// import box4 from "./../../../public/images/instagram-box4.jpg";
// import box5 from "./../../../public/images/instagram-box5.jpg";

const InstagramBoxes = [
   {
    scr:'/images/instagram-box1.jpg',
    alt: 'Instagram tag 1'
  },
   {
    scr:'/images/instagram-box2.jpg',
    alt: 'Instagram tag 2'
  },
   {
    scr:'/images/instagram-box3.jpg',
    alt: 'Instagram tag 3'
  },
   {
    scr:'/images/instagram-box4.jpg',
    alt: 'Instagram tag 1'
  },
   {
    scr:'/images/instagram-box5.jpg',
    alt: 'Instagram tag 5'
  },
]
export default function InstagramFeed() {
  return (
    <div className={InstagramFeedStyle["instagram-feed"]}>
      <ul className={InstagramFeedStyle['instagram-feed__list']}>
      {InstagramBoxes.map((box) => (
        <li key={box.alt} className={InstagramFeedStyle['instagram-feed__item']}>
          <InstagramFeedBox  src={box.scr} alt={box.alt} />
        </li>
      ))}
      </ul>
    </div>
  );
}

interface InstagramFeedBoxProps {
  src: string;
  alt: string;
}
export function InstagramFeedBox({ src, alt }: InstagramFeedBoxProps) {
  return (
    <div className={InstagramFeedStyle['instagram-feed__item-box']}>
      <Image 
        src={src}
        alt={alt} 
        width={1000} 
        height={1000} 
        className={InstagramFeedStyle['instagram--box-img']}
      />
      <div className={InstagramFeedStyle['instagram--box-icon']}>
        <FaInstagram />
      </div>
    </div>
  );
}
