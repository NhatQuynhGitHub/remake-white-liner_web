import InstagramFeed from "@/components/homepage component/InstagramFeed";
import React from "react";
import Image from "next/image";
import AboutStyle from "@/styles/about/about.module.css";

export default function ContactLayout({children}: {children: React.ReactNode}){
    return (
        <div>

            {children}
            <div>
              <Image
                src="/images/instagram-banner.webp"
                alt="Instagram banner"
                width={1000}
                height={1000}
                className={AboutStyle["instagram--banner-img"]}
              />

              <Image
                src="/images/instagram-banner-mobile.webp"
                alt="Instagram banner on mobile"
                width={1000}
                height={1000}
                className={AboutStyle["instagram--banner-img-mobile"]}
              />
            </div>
            <InstagramFeed />
            
        </div>
    
    )
}