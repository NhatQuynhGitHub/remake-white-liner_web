// 'use client'
import News from "@/api/news.json";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import BtnStyle from "@/styles/btn.module.css";
import BlogPageStyle from "@/styles/blogpage/blogpage.module.css";

const articles = News.NEWS;

export function generateStaticParams() {
  return articles.map((article: any) => ({
    title: article.title,
  }));
}

export default function BlogPost({ params }: { params: { title: string } }) {
  const article = articles.filter(
    (post) => post.title === params.title.replaceAll("-", " ")
  );

  return (
    <div>
      {article.map((post) => (
        <article className={BlogPageStyle["blog-post"]} key={post.id}>
          <div className={BlogPageStyle["blog-post__banner"]}>
            <Image
              src={post.imagesUrl}
              alt="Banner of the article"
              width={1000}
              height={1000}
              className={BlogPageStyle["blog-post__banner-img"]}
            />
          </div>
          <div className={BlogPageStyle["container"]}>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <h1 className={BlogPageStyle["blog-post__main-title"]}>
                {post.title}
              </h1>
              <span style={{fontSize: "0.7rem", textTransform:"uppercase", color:"var( --text-quaternary-color)"}}>{post.date}</span>
            </div>
            <div
              className={BlogPageStyle["blog-post__content"]}
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </article>
      ))}
      <div className={BlogPageStyle["container"]}>
        <button
          className={`${BtnStyle["btn-secondary"]} ${BlogPageStyle["btn-go-back"]}`}
        >
          <Link href="/blog" style={{textTransform: "capitalize"}}>
            <IoMdArrowBack /> Back to Blog
          </Link>
        </button>
      </div>
    </div>
  );
}
