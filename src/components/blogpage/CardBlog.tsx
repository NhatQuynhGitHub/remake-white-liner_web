import Image from "next/image";

interface CardBlogProps {
  src: string;
  alt: string;
  title: string;
  date: string;
  content: string;
  classNameDetail: string;
  classNameDetailImg: string;
  classNameCardBlogImg: string;
  classNameDetailInfo: string;
  classNameTitle: string;
  classNameDate: string;
  classNameContent: string;
}

export default function CardBlog({
  src,
  alt,
  title,
  date,
  content,
  classNameTitle,
  classNameContent,
  classNameDetail,
  classNameDetailImg,
  classNameCardBlogImg,
  classNameDetailInfo,
  classNameDate,
}: CardBlogProps) {
  return (
    <div className={classNameDetail}>
      <div className={classNameDetailImg}>
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          className={classNameCardBlogImg}
        />
      </div>
      <div className={classNameDetailInfo}>
        <h3 className={classNameTitle}>{title}</h3>
        <p className={classNameDate}>{date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={classNameContent}
        ></div>
      </div>
    </div>
  );
}
