import FAQStyle from "@/styles/faq/faq.module.css";
import ClassifyQuestion from "@/components/faq/ClassifyQuestion";


export default function FaqPage() {
  return (
    <main>
      <div className={FAQStyle.container}>
        <div>
          <h1 className={FAQStyle["main--title"]}>
            Frequently asked questions
          </h1>
          <p className={FAQStyle["main--content"]}>
            These are our most frequently asked questions! If you cannot find
            the answer you&apos;re looking for here, please reach out to us,
            We&apos;re happy to help!
          </p>
        </div>
        <ClassifyQuestion />
      </div>
    </main>
  );
}
