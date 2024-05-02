import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import st from "./styles.module.css";
import Carousel from "./carousel/carousel";
import GeneralStats from "../generalStatistics/generalStats";
import { DataContext } from "../../context/data-context";
import CompletedExhibition from "./completedExhibition/completedExhibition";

const PastEvents = () => {
  const [images, setImages] = useState([]);
  const { data } = useContext(DataContext);

  useEffect(() => {
    const fetchImages = async () => {
      if (data) {
        try {
          const response = await fetch(
            "https://vistavki.srv9.ru/api/expositions/old/images"
          );
          if (!response.ok) {
            throw new Error("Ошибка при запросе к серверу");
          }
          const data = await response.json();
          setImages(data.result);
        } catch (error) {
          console.error("Ошибка при получении изображений:", error);
        }
      };
    };

    fetchImages();
  }, [data]);

  const shouldShowCompletedExhibition =
    data.exposition_description && data.exposition_images;

  return (
    <div className={st.pastEvents_container}>
      <h3 className={st.pastEvents_header}>Как это было</h3>
      {shouldShowCompletedExhibition && <CompletedExhibition />}
      <GeneralStats />
      <Carousel images={images}></Carousel>
      <button className={st.pastEvents_button}>
        <Link to="/pastEvents" className={st.pastEvents_link}>
          Прошлые выставки
        </Link>
      </button>
    </div>
  );
};

export default PastEvents;
