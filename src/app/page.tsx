import Form from "@/styles/newsletter-subheading.module.css";
import Input from "@/styles/newsletter-subheading.module.css";
import BtnStyle from "@/styles/newsletter-subheading.module.css";
import HomeStyle from "@/styles/homepage/homepage.module.css";
import ShopPickStyle from "@/styles/homepage/shop-pick.module.css";

import NewsletterForm from "@/components/NewsletterForm";
import HeroHomepage from "@/components/homepage component/HeroHomepage";
import Collection from "@/components/homepage component/Collection";
import ShopPick from "@/components/homepage component/ShopPick";
import Image from "next/image";
import Comment from "@/components/homepage component/Comment";
import ShopPickProductSlider from "@/components/homepage component/ShopPickProductSlider";
import Btn from "@/components/Btn";
import News from "@/api/news.json";
import Link from "next/link";
import CardBlog from "@/components/blogpage/CardBlog";
import ArticleSlider from "@/components/blogpage/ArticleSlider";
import InstagramFeed from "@/components/homepage component/InstagramFeed";

const news = News.NEWS;
export default function Home() {
  return (
    <>
      <div>
        <HeroHomepage />
        <main>
          <section className={HomeStyle["container"]}>
            <div className={HomeStyle["greeting__content"]}>
              <h3 className={HomeStyle["greeting__content-title"]}>
                Welcome to white linen
              </h3>
              <p>
                Share information about your brand with your customers. Describe
                a product, make announcements, or welcome customers to your
                store.
              </p>
            </div>
          </section>

          <section className={HomeStyle["container"]}>
            <Collection />
          </section>

          <section className={HomeStyle["shop__banner"]}>
            <div className={HomeStyle["shop__banner-fullscreen"]}>
              <Image
                src="/images/Home_Page_Banner_2_new.webp"
                alt="Shop pillow banner"
                width={800}
                height={1000}
                className={HomeStyle["shop__banner-img"]}
              />
            </div>
            <div className={HomeStyle["shop__banner-mobile"]}>
              <Image
                src="/images/White_Linen_Mobile_Shopify_Banners4.webp"
                alt="Shop pillow banner"
                width={1000}
                height={1000}
                className={HomeStyle["shop__banner-img"]}
              />
            </div>
          </section>

          <section className={ShopPickStyle["shop"]}>
            <div className={HomeStyle["container"]}>
              <ShopPick />
              {/* <ShopPickProductSlider /> */}
            </div>
            {/* <div>
              <Btn btn="View all" />
            </div> */}
          </section>

          <section className={HomeStyle["container"]}>
            <div className={HomeStyle["sign-up"]}>
              <div>
                <h3 className={HomeStyle["sign-up--title"]}>
                  Join the list, get 10% off your first purchase!
                </h3>
                <p>
                  Plus, be the first to know about new collections and exclusive
                  offers. <i>We never spam. Unsubscribe anytime.</i>
                </p>
              </div>
              <NewsletterForm
                formClassName={Form["form-newsletter"]}
                inputClassName={Input["newsletter-input"]}
                btnClassName={BtnStyle["newsletter-btn"]}
              />
            </div>
          </section>
          <section className={HomeStyle["comment--section"]}>
            <Comment />
          </section>

          <section className={HomeStyle["article__section"]}>
            <div className={HomeStyle["article--banner"]}>
              <Image
                src="/images/blog-banner.webp"
                alt="Blog banner in the home page"
                width={1500}
                height={1000}
                className={HomeStyle["article--banner-img"]}
              />
            </div>
            <div>
              <div className={HomeStyle["article__card"]}>
                <ul className={HomeStyle["article__card--list"]}>
                  {news.slice(0, 3).map((item) => (
                    <li
                      key={item.id}
                      className={HomeStyle["article__card--list-item"]}
                    >
                      <Link href="/">
                        <CardBlog
                          src={item.imagesUrl}
                          alt={item.title}
                          title={item.title}
                          date={item.date}
                          content={item.content}
                          classNameDetail={HomeStyle["card-blog__detail"]}
                          classNameDetailImg={
                            HomeStyle["card-blog__detail--img"]
                          }
                          classNameCardBlogImg={HomeStyle["card-blog--img"]}
                          classNameDetailInfo={
                            HomeStyle["card-blog__detail-info"]
                          }
                          classNameContent={
                            HomeStyle["card-blog__detail--content"]
                          }
                          classNameDate={HomeStyle["card-blog__detail--date"]}
                          classNameTitle={HomeStyle["card-blog__detail--title"]}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <ArticleSlider />
            </div>
          </section>

          <section 
            className={HomeStyle["instagram__section"]}
            style={{position: 'relative'}}
          >
            <div>
              <Image
                src="/images/instagram-banner.webp"
                alt="Instagram banner"
                width={1000}
                height={1000}
                className={HomeStyle["instagram--banner-img"]}
              />

              <Image
                src="/images/instagram-banner-mobile.webp"
                alt="Instagram banner on mobile"
                width={1000}
                height={1000}
                className={HomeStyle["instagram--banner-img-mobile"]}
              />
            </div>
            <div>
              <InstagramFeed />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
