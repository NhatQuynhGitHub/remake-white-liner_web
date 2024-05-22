import Collection from "@/components/homepage component/Collection";
import Link from "next/link";
import CollectionsCard from "@/api/products.json"
import ShopStyle from "@/styles/shop/shop.module.css"
import CollectionStyle from "@/styles/homepage/collection.module.css";

const collectionsCard = CollectionsCard.COLLECTIONS

export default function CollectionPage() {
  return (
    <main>
      <section>
        <div className={ShopStyle["shop__page--banner"]}>
          <h1>Browse collections</h1>
        </div>
      </section>
      <section className={ShopStyle['container']}>
        <div className={`${CollectionStyle["collection__section"]} ${ShopStyle['shop--section']}`}>
          <ul className={CollectionStyle["collection__list"]}>
            {collectionsCard.map((collection) => (
              <li
                key={collection.id}
                className={CollectionStyle["collection__item"]}
              >
                <Link
                  href="/"
                  className={CollectionStyle["collection__item-link"]}
                >
                  <Collection
                    src={collection.url}
                    alt={collection.alt}
                    width={300}
                    height={320}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
