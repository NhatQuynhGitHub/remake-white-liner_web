import Image from "next/image";
import ContactStyle from "@/styles/contact/contact.module.css"
import ContactMain from "@/components/contact/ContactMain";
export default function ContactPage() {
  return (
    <main>
      <section>
        <Image src="/images/contact/contact.webp"
        alt="Contact banner"
        width={1400}
        height={1000}
        className={ContactStyle['img-banner']}
        />
      </section>
      <section>
        <ContactMain />
      </section>
    </main>
  );
}
