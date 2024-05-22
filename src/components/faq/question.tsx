"use client";
import QuestionStyle from "@/styles/faq/question.module.css";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface QuestionProps {
  question: any;
  answer: any;
}

export default function Question({ question, answer }: QuestionProps) {
  const [showAnswer, setShowAnswer] = useState(true);
  return (
    <>
      <div className={QuestionStyle['section--question']}>
        <div
          className={QuestionStyle["detail--question"]}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <h5 className={QuestionStyle["question"]}>{question}</h5>
          <button className={QuestionStyle["btn--expand"]}>
            {!showAnswer ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
        {!showAnswer && (
          <div className={QuestionStyle['detail--answer']}>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </>
  );
}
