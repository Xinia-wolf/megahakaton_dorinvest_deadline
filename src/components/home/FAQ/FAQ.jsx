import React, { useContext } from "react";
import { Link } from "react-router-dom";
import st from "./styles.module.css";
import image from "../../../assets/FAQ.png";
import background from "../../../assets/background.png";
import { DataContext } from "../../context/data-context";

const FAQ = () => {
  const { data } = useContext(DataContext);

  const handleDownload = () => {
    fetch(data.contract_file)
      .then((response) => response.blob())
      .then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Договор.docx";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(fileUrl);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <div className={st.FAQContainer}>
      <h3 className={st.FAQHeader}>Как взять питомца</h3>
      <div className={st.innerContainer}>
        <div className={st.textAndButtonsContainer}>
          <p className={st.FAQText}>
            {data.how_get_text} 
          </p>
          <button className={st.FAQButton}>
            <Link to="/FAQ_page" className={st.FAQLink}>
              Часто задаваемые вопросы
            </Link>
          </button>
          <button onClick={handleDownload} className={st.FAQButton}>
            Скачать договор
          </button>
        </div>
        <div className={st.FAQImgContainer}>
          <img
            src={background}
            className={st.FAQBackground}
            alt="background"
          ></img>
          <img className={st.FAQImg} src={image} alt="dogs-in-the-family"></img>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
