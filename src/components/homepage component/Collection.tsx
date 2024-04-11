import Link from "next/link";
import Image from "next/image";
import CollectionStyle from '@/styles/homepage/collection.module.css'
export default function Collection() {
  return (
    <div className={CollectionStyle['collection__section']}>
      <ul className={CollectionStyle['collection__list']}>
        <li className={CollectionStyle['collection__item']}>
          <Link href="/" className={CollectionStyle['collection__item-link']}>
            <Image 
                width={300}
                height={320}
                className={CollectionStyle['collection__item-card']}
                src="/images/1.webp" 
                alt="..."
            />
          </Link>
        </li>

        <li className={CollectionStyle['collection__item']}>
          <Link href="/" className={CollectionStyle['collection__item-link']}>
            <Image 
                width={300}
                height={320}
                src="/images/3.webp" 
                alt="..."
                className={CollectionStyle['collection__item-card']}
               
            />
          </Link>
        </li>

        <li className={CollectionStyle['collection__item']}>
          <Link href="/" className={CollectionStyle['collection__item-link']}>
            <Image 
                width={300}
                height={320}
                className={CollectionStyle['collection__item-card']}
                src="/images/2.webp" 
                alt="..."
            />
          </Link>
        </li>

        <li className={CollectionStyle['collection__item']}>
          <Link href="/" className={CollectionStyle['collection__item-link']}>
            <Image 
                width={300}
                height={320}
                className={CollectionStyle['collection__item-card']}
                src="/images/4.webp" 
                alt="..."
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
