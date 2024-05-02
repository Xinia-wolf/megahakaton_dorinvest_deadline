import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import st from "./styles.module.css";
import { DataContext } from "../context/data-context";

const FAQPage = () => {
  const { data } = useContext(DataContext);
  const [questions, setQuestions] = useState([]);
  const [activeQuestions, setActiveQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (data) {
        try {
          const response = await fetch(
            "https://vistavki.srv9.ru/api/questions"
          );
          if (!response.ok) {
            throw new Error("Ошибка при запросе к серверу");
          }
          const data = await response.json();
          setQuestions(data.result);
        } catch (error) {
          console.error("Ошибка при получении изображений:", error);
        }
      }
    };

    fetchQuestions();
  }, [data]);

  const toggleQuestion = (index) => {
    setActiveQuestions((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className={st.FAQPage}>
      <Helmet>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
        <meta name="keywords" content={data.meta_keywords} />
      </Helmet>
      {Array.isArray(questions) &&
        questions.map((question, index) => (
          <div key={index} className={st.qCard}>
            <div onClick={() => toggleQuestion(index)} className={st.question}>
              {question.question}
            </div>
            {activeQuestions.includes(index) && (
              <div className={st.answer}>{question.answer}</div>
            )}
          </div>
        ))}
    </div>
  );
};

export default FAQPage;
