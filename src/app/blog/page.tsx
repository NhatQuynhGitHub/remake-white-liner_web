import BlogPageStyle from "@/styles/blogpage/blogpage.module.css";
import Form from "@/styles/newsletter-subheading.module.css";
import Input from "@/styles/newsletter-subheading.module.css";
import BtnStyle from "@/styles/newsletter-subheading.module.css";

import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import CardBlog from "@/components/blogpage/CardBlog";
import News from "@/api/news.json";
import Link from "next/link";
import ArticleSlider from "@/components/blogpage/ArticleSlider";

const news = News.NEWS;

export default function BlogPage() {
  return (
    <main>
      <section className={BlogPageStyle["banner__section"]}>
        <Image
          src="/images/blog/Blog_Page_Header_Bannernew.webp"
          alt="Blog banner"
          width={1000}
          height={1000}
          className={BlogPageStyle["banner-img"]}
        />
      </section>

      <section className={BlogPageStyle["subscribe__section"]}>
        <div className={BlogPageStyle["container"]}>
          <div className={BlogPageStyle["subs__detail--content"]}>
            <h2 className={BlogPageStyle["subs__detail--content-title"]}>
              Subscribe to know when a new post launches!
            </h2>
            <p>
              You&apos;ll be the first to know what knew things we have to say!
            </p>
          </div>
          <NewsletterForm
            formClassName={Form["form-newsletter"]}
            inputClassName={Input["newsletter-input"]}
            btnClassName={BtnStyle["newsletter-btn"]}
          />
        </div>
      </section>

      <section className={BlogPageStyle["article__section"]}>
        <div>
          <div className={BlogPageStyle["article__card"]}>
            <ul className={BlogPageStyle["article__card--list"]}>
              {news.map((item) => (
                <li
                  key={item.id}
                  className={BlogPageStyle["article__card--list-item"]}
                >
                  <Link href="/">
                    <CardBlog
                      src={item.imagesUrl}
                      alt={item.title}
                      title={item.title}
                      date={item.date}
                      content={item.content}
                      classNameDetail={BlogPageStyle["card-blog__detail"]}
                      classNameDetailImg={
                        BlogPageStyle["card-blog__detail--img"]
                      }
                      classNameCardBlogImg={BlogPageStyle["card-blog--img"]}
                      classNameDetailInfo={
                        BlogPageStyle["card-blog__detail-info"]
                      }
                      classNameContent={
                        BlogPageStyle["card-blog__detail--content"]
                      }
                      classNameDate={BlogPageStyle["card-blog__detail--date"]}
                      classNameTitle={BlogPageStyle["card-blog__detail--title"]}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
