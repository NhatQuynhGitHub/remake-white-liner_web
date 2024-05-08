import Link from "next/link";
import Image from "next/image";
import CollectionStyle from "@/styles/homepage/collection.module.css";

interface CollectionProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Collection({ src, alt, width, height }: CollectionProps) {
  return (
    <>
      <Image
        width={width}
        height={height}
        className={CollectionStyle["collection__item-card"]}
        src={src}
        alt={alt}
      />
    </>
  );
}
