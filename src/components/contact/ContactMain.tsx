import ContactStyle from "@/styles/contact/contact.module.css";
import Image from "next/image";
import SocialIcon from "../SocialIcon";
import ContactForm from "./ContactForm";

export default function ContactMain() {
  return (
    <div className={ContactStyle['container']}>
      <div className={ContactStyle["section-contact"]}>
        <ContactForm />
        <div className={ContactStyle["contact__image"]}>
          <Image
            src="/images/contact/fiona-murray-bNE_l_p7u9E-unsplash-_3_large.webp"
            alt="Picture of decorations stuff"
            width={1000}
            height={1000}
            className={ContactStyle["img--contact"]}
          />
          <div className={ContactStyle['contact__image--social-icon']}>
            <SocialIcon
              socialIcon={ContactStyle["social__icon"]}
              socialIconList={ContactStyle["social__icon--list"]}
              socialIconItem={ContactStyle["social__icon--item"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
