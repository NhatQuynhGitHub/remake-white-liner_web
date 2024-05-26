import Image from "next/image";
import CardProductStyle from "@/styles/card-product.module.css";
import { Children } from "react";

interface CardProductProps {
  className: string;
  children: React.ReactNode
}

export default function CardProduct({ className, children }: CardProductProps) {
  return <div className={className}>{children}</div>;
}
