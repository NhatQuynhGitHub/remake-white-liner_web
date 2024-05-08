import BlogPageStyle from "@/styles/blogpage/blogpage.module.css";
import NewsletterFormStyle from "@/styles/newsletter-subheading.module.css";

import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import CardBlog from "@/components/blogpage/CardBlog";
import News from "@/api/news.json";

const news = News.NEWS;

function getNews() {
  return news;
}

export default function BlogPage() {
  const news = getNews();

  return (
    <main>
      <section className={BlogPageStyle["banner__section"]}>
        <Link href="/blog#article">
          <Image
            src="/images/blog/Blog_Page_Header_Bannernew.webp"
            alt="Blog banner"
            width={1000}
            height={1000}
            className={BlogPageStyle["banner-img"]}
          />
        </Link>
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
            formClassName={NewsletterFormStyle["form-newsletter"]}
            inputClassName={NewsletterFormStyle["newsletter-input"]}
            btnClassName={NewsletterFormStyle["newsletter-btn"]}
          />
        </div>
      </section>

      <section
        id="article"
        className={BlogPageStyle["article__section"]}
        style={{ margin: "0, auto" }}
      >
        <div>
          <div className={BlogPageStyle["article__card"]}>
            <ul className={BlogPageStyle["article__card--list"]}>
              {news.length > 0 &&
                news.map((blog) => (
                  <li
                    key={blog.id}
                    className={BlogPageStyle["article__card--list-item"]}
                  >
                    <Link
                      href={`/blog/${blog.title
                        .toLocaleLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <CardBlog
                        src={blog.imagesUrl}
                        alt={blog.title}
                        title={blog.title}
                        date={blog.date}
                        content={blog.content}
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
                        classNameTitle={
                          BlogPageStyle["card-blog__detail--title"]
                        }
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
