// 'use client'
import News from "@/api/news.json";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

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
        <article key={post.id}>
          <div>
            <Image
              src={post.imagesUrl}
              alt="Banner of the article"
              width={1000}
              height={1000}
            />
          </div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </article>
      ))}
      <button>
        <Link href="/blog">
          <span>
            <IoMdArrowBack />
          </span>
          Back to Blog
        </Link>
      </button>
    </div>
  );
}
