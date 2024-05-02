import React from "react";
import { Link } from "react-router-dom";
import st from "./styles.module.css";
import Cats from "../../../assets/Cats.png";
import Dogs from "../../../assets/Dogs.png";

const Participants = () => {
  return (
    <div className={st.participantsContainer} id="ourParticipants">
      <h3 className={st.participantsHeader}>Наши участники</h3>
      <div className={st.participantsMenu}>
        <div className={st.participantsCats}>
          <button className={st.participantsButton}>
            <Link to="/cats" className={st.participantsLink}>
              Кошки
            </Link>
          </button>
          <img src={Cats} className={st.participantsImg} alt="cat"></img>
        </div>
        <div className={st.participantsDogs}>
          <button className={st.participantsButton}>
            <Link to="/dogs" className={st.participantsLink}>
              Собаки
            </Link>
          </button>
          <img src={Dogs} className={st.participantsImg} alt="dog"></img>
        </div>
      </div>
    </div>
  );
};

export default Participants;
