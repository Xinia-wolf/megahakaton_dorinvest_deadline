import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import st from "./styles.module.css";
import { DataContext } from "../context/data-context";

const Cats = () => {
  const { data, cats } = useContext(DataContext);

  if (!data && !cats) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={st.catsContainer}>
      <Helmet>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
        <meta name="keywords" content={data.meta_keywords} />
      </Helmet>
      {Array.isArray(cats) &&
        cats.map((cat, index) => (
          <div key={index} className={st.catCard}>
            <img src={cat.image} alt={cat.name} />
            <span className={st.catText}>
              {cat.name}, {cat.age}
            </span>
          </div>
        ))}
    </div>
  );
};

export default Cats;
