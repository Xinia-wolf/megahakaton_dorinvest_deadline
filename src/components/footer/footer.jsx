import React, { useContext } from "react";
import st from "./styles.module.css";
import { Link } from "react-router-dom";
import telegram from "../../assets/Telegram.svg";
import vk from "../../assets/VK.svg";
import odnoklassniki from "../../assets/Odnoklassniki.svg";
import { DataContext } from "../context/data-context";

const Footer = () => {
  const { data } = useContext(DataContext);

  if (!data) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={st.footerContainer}>
      <div className={st.footerMenu}>
        <h6 className={st.footerHeader}>Меню</h6>
        <a href="#ourParticipants" className={st.menuLink}>
          Наши участники
        </a>
        <Link to="/cats" className={st.menuLink}>
          Кошки
        </Link>
        <Link to="/dogs" className={st.menuLink}>
          Собаки
        </Link>
        <a href="#aboutExhibition" className={st.menuLink}>
          О выставке
        </a>
        <a href="#partners" className={st.menuLink}>
          Партнеры
        </a>
        <Link to="/past_events" className={st.menuLink}>
          Прошлые выставки
        </Link>
      </div>
      <div className={st.footerContacts} id="contacts">
        <h6 className={st.footerHeader}>Контакты</h6>
        <div className={st.contactsText}>
          <p>{data.contact_address} <br />
          Email: {data.contact_email}</p>
        </div>
      </div>
      <div className={st.socialNetworks}>
        <h6 className={st.networksHeader}>Мы в соцсетях</h6>
        <div className={st.iconsContainer}>
          <a
            href={data.contact_telegram}
            className={st.iconLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} className={st.icon} alt="telegram-logo"></img>
          </a>
          <a
            href={data.contact_vkontakte}
            className={st.iconLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={vk} className={st.icon} alt="vk-logo"></img>
          </a>
          <a
            href={data.contact_odnoklassniki}
            className={st.iconLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={odnoklassniki}
              className={st.icon}
              alt="odnoklassniki-logo"
            ></img>
          </a>
        </div>
      </div>
      <div className={st.askQuestion}>
        <h6 className={st.footerHeader}>Задайте нам вопрос</h6>
        <a href={`tel:${data.contact_phone}`} className={st.phoneNumber}>
          {data.contact_phone}
        </a>
        <button className={st.callButton}>Заказать звонок</button>
      </div>
    </div>
  );
};

export default Footer;
