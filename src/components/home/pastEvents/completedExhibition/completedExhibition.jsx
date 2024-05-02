import React, { useContext } from "react";
import st from "./styles.module.css";
import { DataContext } from "../../../context/data-context";
import { formatDate } from "../../banner/banner";
import Carousel from "../carousel/carousel";

const CompletedExhibition = () => {
  const { data } = useContext(DataContext);

  return (
    <div className={st.completedExhibition}>
      <center className={st.completedTextContainer}>
        <h3 className={st.completedHeader}>
          {data.place}, {formatDate(data.date_start, data.date_finish)}
        </h3>
        <p className={st.completedText}>
          {data.exposition_description}
        </p>
      </center>
      {data.exposition_images && <Carousel images={data.exposition_images} />}
      <center className={st.completedPast}>Прошлые мероприятия</center>
    </div>
  );
};

export default CompletedExhibition;
