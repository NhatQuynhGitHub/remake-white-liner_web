import banner1 from "./../../../public/images/homepage_banner/Home_Page_Banner_1new.webp";
import banner2 from "./../../../public/images/homepage_banner/Home_Page_Banner_1.webp";
import banner3 from "./../../../public/images/homepage_banner/Home_Page_Banner_2.webp";
import bannerMobile1 from './../../../public/images/homepage_banner_mobile/White_Linen_Mobile_Shopify_Banners1.webp'
import bannerMobile2 from './../../../public/images/homepage_banner_mobile/White_Linen_Mobile_Shopify_Banners2.webp'
import bannerMobile3 from './../../../public/images/homepage_banner_mobile/White_Linen_Mobile_Shopify_Banners3.webp'
import BannerSlider from "./BannerSlider";
import BannerMobileSlider from "./BannerMobileSlider";

const ImageBanner = [
  { url: banner1,  
    alt: "The new collection"},
  {url: banner2,
  alt:  "New arrivals"},
  {url: banner3,
  alt: "Sale off" }
];

const ImageBannersMobile = [
  { url: bannerMobile1,  
    alt: "The new collection"},
  {url: bannerMobile2,
  alt:  "New arrivals"},
  {url: bannerMobile3,
  alt: "Sale off" }
];

export default function HeroHomepage() {
  return (
    <div>
      <BannerSlider
        banners={ImageBanner}
      />
      <BannerMobileSlider 
        bannersMobile={ImageBannersMobile}
      />
    </div>
  );
}
