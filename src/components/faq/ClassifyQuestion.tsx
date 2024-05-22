import QuestionData from "@/api/question-faq.json"
import QuestionStyle from "@/styles/faq/question.module.css";
import Question from "./question";

interface QuestionType {
    id: number;
    category: string;
    question: string;
    answer: string
}

interface ClassificationCategoryProps {
    label: string;
    detailOfQuestion: QuestionType[]
}

const Data: QuestionType[] = QuestionData.QUESTIONS1

const Classification: ClassificationCategoryProps[] = Object.entries (
    Data.reduce((acc: {[category: string]: QuestionType[] }, { id, category, question, answer }: QuestionType) => {
        if (!acc[category]) {
            acc[category] = [];
        } 
        acc[category].push({ id, category, question, answer });
        return acc;
    }, {})
).map(([label, detailOfQuestion]) => ({ label, detailOfQuestion }));
console.log({ Classification });


export default function ClassifyQuestion(){
    return (
        <section>
            {Classification.map(({label, detailOfQuestion}) => (
                <div key={label}>
                    <h3 className={QuestionStyle['section--title']}>{label}</h3>
                    {detailOfQuestion.map((q: any) => (
                        <div key={q.id}>
                            <Question 
                                question={q.question}
                                answer={q.answer}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </section>
    )
}