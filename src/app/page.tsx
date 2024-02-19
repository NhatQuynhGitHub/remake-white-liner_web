import NewsletterForm from "@/components/NewsletterForm";
import Image from "next/image";
import Link from "next/link";
import Form from '@/styles/newsletter-subheading.module.css'
import Input2 from '@/styles/newsletter-subheading.module.css';
import Btn2 from '@/styles/newsletter-subheading.module.css'

export default function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <NewsletterForm 
         className={[
          Form['form-newsletter'], 
          Input2['newsletter-input'],
          Btn2['newsletter-btn']
        ]}
      />

    </>
  );
}
