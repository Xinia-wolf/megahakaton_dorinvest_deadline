import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import st from "./styles.module.css";
import { DataContext } from "../context/data-context";

const Dogs = () => {
  const { data, dogs } = useContext(DataContext);

  if (!data && !dogs) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={st.dogsContainer}>
      <Helmet>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
        <meta name="keywords" content={data.meta_keywords} />
      </Helmet>
      {Array.isArray(dogs) &&
        dogs.map((dog, index) => (
          <div key={index} className={st.dogCard}>
            <img src={dog.image} alt={dog.name} />
            <span className={st.dogText}>{dog.name}, {dog.age}</span>
          </div>
        ))}
    </div>
  );
};

export default Dogs;
