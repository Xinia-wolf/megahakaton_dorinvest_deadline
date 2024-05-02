import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import st from "./styles.module.css";
import { DataContext } from "../../context/data-context";

const Partners = () => {
  const { data } = useContext(DataContext);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      if (data && data.exposition_id) {
        try {
          const response = await axios.get(
            `https://vistavki.srv9.ru/api/expositions/${data.exposition_id}/partners`
          );
          setPartners(response.data.result);
        } catch (error) {
          console.error("Ошибка при получении данных о партнёрах:", error);
        }
      }
    };

    fetchPartners();
  }, [data, data.exposition_id]);

  return (
    <div className={st.partnersContainer} id="partners">
      <h3 className={st.partnersHeader}>Наши партнеры</h3>
      <div className={st.logosContainer}>
        {partners.map((partner, index) => (
          <div key={index} className={st.partnerLogo}>
            <a href={partner.link} className={st.partnerLink}>
              <img src={partner.image} className={st.logo} alt={partner.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
