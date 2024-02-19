import SocialIcon from "./SocialIcon";
import NewsletterForm from "./NewsletterForm";
import Logo from "./Logo";
import QuickLink from "./QuickLink";
import FormNewsletter from '@/styles/newsletter-footer.module.css'
import InputNewsletter from "@/styles/newsletter-footer.module.css"
import BtnNewsletter from '@/styles/newsletter-footer.module.css'



export default function Footer(){
    return (
        <footer>
            <div className="footer">
                <div className="footer-block">
                   <Logo 
                    width={250}
                    height={125}
                   />
                    <hr style={{width:"300px"}} />
                    <SocialIcon />
                </div>
                <QuickLink />
                <div className="footer-block">
                    <h2>Join my list, love!</h2>
                    <NewsletterForm 
                        className={[
                            FormNewsletter['form-newsletter'], 
                            InputNewsletter['newsletter-input'],
                            BtnNewsletter['newsletter-btn']

                        ]}
                    />
                </div>
            </div>
            
        </footer>
    )
}