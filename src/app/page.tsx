import NewsletterForm from "@/components/NewsletterForm";
import Image from "next/image";
import Link from "next/link";
import Form from '@/styles/newsletter-subheading.module.css'
import Input from '@/styles/newsletter-subheading.module.css';
import Btn from '@/styles/newsletter-subheading.module.css'

export default function Home() {
  return (
    <>
      <div style={{backgroundColor: 'gray'}}>
      <h1>Homepage</h1>
      <NewsletterForm 
        formClassName={Form['form-newsletter']}
        inputClassName={Input['newsletter-input']}
        btnClassName={Btn['newsletter-btn']}
      />
      </div>

    </>
  );
}
