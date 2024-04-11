import Image from "next/image"
import CardProductStyle from '@/styles/card-product.module.css'

interface CardProductProps {
    src: string, 
    alt: any,  
    title: any, 
    price: any 
}

export default function CardProduct({src, alt,  title, price } : CardProductProps){
    return (
        <div className={CardProductStyle['card']}>
            <Image 
                src={src}
                alt={alt}
                width={1000}
                height={1000}
                className={CardProductStyle['card-img']}

            />
            <div className={CardProductStyle['card__info']}>
                <h4 className={CardProductStyle['card__info-title']}>{title}</h4>
                <span className={CardProductStyle['card__info-price']}>${price} usa</span>
            </div>
        </div>
    )
}