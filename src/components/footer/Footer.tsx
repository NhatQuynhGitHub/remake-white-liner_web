import SocialIcon from "../SocialIcon";
import NewsletterForm from "../NewsletterForm";
import Logo from "../Logo";
import QuickLink from "./QuickLink";
import FormNewsletter from "@/styles/newsletter-footer.module.css";
import InputNewsletter from "@/styles/newsletter-footer.module.css";
import BtnNewsletter from "@/styles/newsletter-footer.module.css";
import logoStyle from "@/styles/logo.module.css";
import FooterStyle from "@/styles/footer-style.module.css";
import LineDivideStyle from "@/styles/footer-style.module.css";
import SocialIconStyle from "@/styles/social-icon.module.css";
import SocialIconListStyle from "@/styles/social-icon.module.css";
import SocialIconItemStyle from "@/styles/social-icon.module.css";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer>
      <div className={FooterStyle["footer"]}>
        <div className="footer-block">
          <Logo className={logoStyle["logo-footer"]} width={250} height={125} />
          <hr className={LineDivideStyle["line-divide"]} />
          <SocialIcon
            socialIcon={SocialIconStyle["footer__social__icon"]}
            socialIconList={SocialIconListStyle["footer__social__icon-list"]}
            socialIconItem={SocialIconItemStyle["footer__social__icon-item"]}
          />
        </div>
        <QuickLink />
        <div className="footer-block">
          <h2>Join my list, love!</h2>
          <NewsletterForm
            formClassName={FormNewsletter["form-newsletter"]}
            inputClassName={InputNewsletter["newsletter-input"]}
            btnClassName={BtnNewsletter["newsletter-btn"]}
          />
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}
