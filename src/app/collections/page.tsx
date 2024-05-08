import Collection from "@/components/homepage component/Collection";
import Link from "next/link";
import CollectionsCard from "@/api/products.json"

import CollectionStyle from "@/styles/homepage/collection.module.css";

const collectionsCard = CollectionsCard.COLLECTIONS

export default function CollectionPage() {
  return (
    <main>
      <section>
        <div>
          <h1>Browse collections</h1>
        </div>
      </section>
      <section>
        <div className={CollectionStyle["collection__section"]}>
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
