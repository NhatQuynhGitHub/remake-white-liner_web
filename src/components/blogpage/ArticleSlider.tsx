import HomeStyle from "@/styles/homepage/homepage.module.css";
import CardBlogSlider from "./CardBlogSlider";

import News from "@/api/news.json";
import CardBlog from "./CardBlog";
import { it } from "node:test";


const news = News.NEWS;

const Articles = news.slice(0, 3).map((item) => (
        <CardBlog
            key={item.id}
            src={item.imagesUrl}
            alt={item.title}
            title={item.title}
            date={item.date}
            content={item.content}
            classNameDetail={HomeStyle['card-blog__detail']}
            classNameDetailImg={HomeStyle['card-blog__detail--img']}
            classNameCardBlogImg={HomeStyle['card-blog--img']}
            classNameDetailInfo={HomeStyle['card-blog__detail-info']}
            classNameContent={HomeStyle['card-blog__detail--content']}
            classNameDate={HomeStyle['card-blog__detail--date']}
            classNameTitle={HomeStyle['card-blog__detail--title']}
        />  
      
))

export default function ArticleSlider(){
    return (
        <div className={HomeStyle['article__slider']}>
            <CardBlogSlider 
                cardBlogs={Articles}
            />
        </div>
    )
}