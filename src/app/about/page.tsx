import Link from "next/link";
import AboutUs from "@/components/about/AboutUs";
import Comment from "@/components/homepage component/Comment";
import Image from "next/image";
import ShopPick from "@/components/homepage component/ShopPick";

import AboutStyle from "@/styles/about/about.module.css";
import ShopPickStyle from "@/styles/homepage/shop-pick.module.css";
import CommentStyle from "@/styles/homepage/homepage.module.css";
import Btn from "@/components/Btn";
export default function AboutPage() {
  return (
    <main>
      <section>
        <div>
          <Image
            src="/images/about/ABOUT_088aee0a-ea94-405e-8faa-a065ec82f65f.webp"
            alt="About the first banner"
            width={1200}
            height={1000}
            className={`${AboutStyle["img--banner"]}`}
          />
        </div>
      </section>
      <section className={`${AboutStyle["section--content"]}`}>
        <div
          className={`${AboutStyle["container"]} ${AboutStyle["section__about-us"]}`}
        >
          <h3 className={AboutStyle["section--title"]}>We&apos;re White Linen!</h3>
          <p className={AboutStyle["section__about-us--content"]}>
            Papeterie rideaux arbre en fleurs mode voyage plume hiver, travail
            cher automne souvent manteau champagne timbre diamants rose.
            Dentelle musique citation vent fontaine, montre bonne velours
            fabuleux ballet merveilles parapluie chocolat floraison doux froid
            charmant. Rideaux arbre en fleurs mode voyage plume hiver, travail
            cher automne souvent manteau. Fleurs mode papeterie rideaux arbre en
            voyage plume hiver, travail cher automne souvent manteau champagne
            timbre diamants rose.
          </p>
          <div className={`${AboutStyle["btn"]}`}>
            <Link href="/collections/bestsellers">
              <Btn btn="Shop bestsellers" />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className={`${AboutStyle["section--content"]}`}>
          <Image
            src="/images/about/White_Linen_Large_Banners3.webp"
            alt="About the second banner"
            width={1200}
            height={1000}
            className={`${AboutStyle["img--banner"]}`}
          />
        </div>
        <div
          className={`${AboutStyle["section--content"]} ${CommentStyle["comment--section"]}`}
        >
          <Comment />
        </div>
      </section>
      <section className={ShopPickStyle["shop"]}>
        <div
          className={`${AboutStyle["section--content"]} ${AboutStyle["container"]}`}
        >
          <h3 className={AboutStyle["section--title"]}>Shop ours faves</h3>
          <ShopPick quantityOfProducts={4} />
        </div>
      </section>
      <section>
        <div className={`${AboutStyle["section--content"]}`}>
          <div
            className={`${AboutStyle["section__service"]} ${AboutStyle["container"]}`}
          >
            <div className={AboutStyle["section__service--img"]}>
              <Image
                src="/images/about/about_image.webp"
                alt="About the third banner"
                width={1000}
                height={1000}
                className={AboutStyle["img--service"]}
              />
            </div>
            <div className={`${AboutStyle["section__service--detail"]}`}>
              <h3 className={AboutStyle["section--title"]}>
                We can&apos;t wait to serve you
              </h3>
              <p>
                Papeterie rideaux arbre en fleurs mode voyage plume hiver,
                travail cher automne souvent manteau champagne timbre diamants
                rose mode voyage plume hiver, travail. Automne souvent manteau
                champagne timbre
              </p>
              <div className={`${AboutStyle["btn"]}`}>
                <Link href="/collections">
                  <Btn btn="Shop now!"  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
