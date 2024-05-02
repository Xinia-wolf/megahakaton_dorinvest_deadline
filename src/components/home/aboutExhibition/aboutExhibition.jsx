import React from "react";
import st from "./styles.module.css";

const AboutExhibition = ({ description }) => {
  return (
    <div className={st.aboutExhibitionContainer}>
      <center className={st.aboutExhibition} id="aboutExhibition">
        <h3 className={st.aboutHeader}>О выставке</h3>
        <p className={st.aboutText}>
          {description}
        </p>
      </center>
    </div>
  );
};

export default AboutExhibition;
