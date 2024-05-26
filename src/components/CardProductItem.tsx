import Image from "next/image";
import CardProductStyle from "@/styles/card-product.module.css";

interface CardProductProps {
  src: string;
  alt: any;
  title: any;
  price: any;
}

export default function CardProductItem({
  src,
  alt,
  title,
  price,

}: CardProductProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className={CardProductStyle['img-card']}
      />
      <div className={CardProductStyle['card__info']}>
        <h4 className={CardProductStyle['card__info-title']}>{title}</h4>
        <span className={CardProductStyle['card__info-price']}>${price} usa</span>
      </div>
    </>
  );
}
