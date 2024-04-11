import Image from "next/image"
import { ImQuotesLeft } from "react-icons/im";
import CommentStyle from "@/styles/homepage/homepage.module.css"

export default function Comment() {
    return (
        <div className={CommentStyle['container']}>
            <p className={CommentStyle['comment--section-title']}>Overheard</p>
            <div>
                <div className={CommentStyle['comment__detail']}>
                    <div className={CommentStyle['comment__detail--icon-quote']}>
                        <span><ImQuotesLeft /></span>
                    </div>
                    <div className={CommentStyle['comment__detail--user-quote']}>
                        <p>White Linen&apos;s products are amazing! So high quality and gorgeous. Totally my style, light and airy, they make my home look amazing!</p>
                    </div>
                    <div className={CommentStyle['comment__detail--user']}>
                        <Image 
                            src="/images/user-2.avif"
                            alt="Avatar of user"
                            width={1000}
                            height={1000}
                            className={CommentStyle['comment__detail--user-img']}
                        />
                    </div>
                    <div className={CommentStyle['comment__detail--user-info']}>
                        <p>Elizabeth Anderson</p>
                    </div>
                </div>

            </div>
        </div>
    )
}