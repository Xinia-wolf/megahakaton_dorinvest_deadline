import React, { useContext } from "react";
import st from "./styles.module.css";
import logo from "../../../assets/logo_new.svg";
import bannerPic1 from "../../../assets/Img №1.png";
import bannerPic2 from "../../../assets/Img №2.png";
import bannerPic3 from "../../../assets/Img №3.png";
import bannerPic4 from "../../../assets/Img №4.png";
import bannerPic5 from "../../../assets/Img №5.png";
import { DataContext } from "../../context/data-context";

export const formatDate = (dateStart, dateFinish) => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const date1 = new Date(dateStart);
  const day1 = date1.getDate();
  const monthIndex1 = date1.getMonth();
  const year1 = date1.getFullYear();
  const date2 = new Date(dateFinish);
  const day2 = date2.getDate();
  const monthIndex2 = date2.getMonth();
  const year2 = date2.getFullYear();

  if (day1 === day2 && monthIndex1 === monthIndex2 && year1 === year2) {
    return `${day1} ${months[monthIndex1]} ${year1} г.`;
  } else if (
    day1 !== day2 &&
    monthIndex1 === monthIndex2 &&
    year1 === year2
  ) {
    return `${day1}-${day2} ${months[monthIndex1]} ${year1} г.`;
  } else if (monthIndex1 !== monthIndex2 && year1 === year2) {
    return `${day1} ${months[monthIndex1]}-${day2} ${months[monthIndex2]} ${year1} г.`;
  } else {
    return `${day1} ${months[monthIndex1]} ${year1} г.-${day2} ${months[monthIndex2]} ${year2} г.`;
  }
};

const Banner = () => {
  const { data } = useContext(DataContext);

  const getImageSrc = (topImage) => {
    let imageSrc;
    switch (topImage) {
      case "1":
        imageSrc = bannerPic1;
        break;
      case "2":
        imageSrc = bannerPic2;
        break;
      case "3":
        imageSrc = bannerPic3;
        break;
      case "4":
        imageSrc = bannerPic4;
        break;
      case "5":
        imageSrc = bannerPic5;
        break;
      default:
        imageSrc = bannerPic1;
    }
    return imageSrc;
  };

  return (
    <div className={st.bannerContainer}>
      <div className={st.bannerLogo}>
        <span className={st.bannerHeader}>Выставка-пристройство животных</span>
        <img src={logo} className={st.logo} alt="logo"></img>
        <div className={st.bannerTextContainer}>
          <span className={st.bannerText}>
            {formatDate(data.date_start, data.date_finish)}
          </span>
          <span className={st.bannerText}>{data.place}</span>
        </div>
        {data.status !== "active" && (
          <div className={st.completedExhibition}>
            <h3 className={st.completedHeader}>Выставка завершилась</h3>
            <span className={st.completedText}>
              Следите за нашими новостями
            </span>
          </div>
        )}
      </div>
      <div className={st.bannerPicContainer}>
        <img src={getImageSrc(data.top_image)} className={st.bannerPic} alt="pets"></img>
      </div>
    </div>
  );
};

export default Banner;
