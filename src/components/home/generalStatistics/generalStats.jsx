import React, { useContext } from "react";
import st from "./styles.module.css";
import { DataContext } from "../../context/data-context";

const GeneralStats = () => {
  const { data } = useContext(DataContext);

  return (
    <div className={st.generalStatsContainer}>
      <div className={st.statsContainer}>
        <center className={st.parameter}>
          <span className={st.statsNumber}>{data.statistic_pets}</span>
          <span className={st.statsText}>
            животных было представлено на выставке
          </span>
        </center>
        <center className={st.parameter}>
          <span className={st.statsNumber}>{data.statistic_volunteers}</span>
          <span className={st.statsText}>
            волонтеров помогали искать новых хозяев
          </span>
        </center>
        <center className={st.parameter}>
          <span className={st.statsNumber}>{data.statistic_pets_home}</span>
          <span className={st.statsText}>питомцев нашли новый дом</span>
        </center>
      </div>
    </div>
  );
};

export default GeneralStats;
