import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import st from "./styles.module.css";
import { DataContext } from "../context/data-context";

const PastEventsPage = () => {
  const { data } = useContext(DataContext);
  const [expositions, setExpositions] = useState([]);

  useEffect(() => {
    const fetchExpositions = async () => {
      if (data) {
        try {
          const response = await fetch(
            "https://vistavki.srv9.ru/api/expositions/old"
          );
          if (!response.ok) {
            throw new Error("Ошибка при запросе к серверу");
          }
          const data = await response.json();
          setExpositions(data.result);
        } catch (error) {
          console.error("Ошибка при получении изображений:", error);
        }
      }
    };

    fetchExpositions();
  }, [data]);

  const getYearFromDateString = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
   }

  return (
    <div className={st.pastEventsPage}>
      <Helmet>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
        <meta name="keywords" content={data.meta_keywords} />
      </Helmet>
      {Array.isArray(expositions) &&
        expositions.map((exposition, index) => (
          <div key={index} className={st.expCard}>
            <h5 className={st.expHeader}>{exposition.place}, {getYearFromDateString(exposition.date_start)}</h5>
            <div className={st.expPhotos}>
                <img src={exposition.images[0]} className={st.expPhoto} alt="expo"></img>
                <img src={exposition.images[1]} className={st.expPhoto} alt="expo"></img>
                <img src={exposition.images[2]} className={st.expPhoto} alt="expo"></img>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PastEventsPage;
