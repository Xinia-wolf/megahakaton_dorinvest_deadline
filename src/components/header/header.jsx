import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import st from "./styles.module.css";
import logo from "../../assets/dorinvest_logo.svg";
import NavBar from "./navBar";
import backIcon from "../../assets/backIcon.svg";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navigate = useNavigate();

  return (
    <div className={st.header_container}>
      <div className={st.logo}>
        {isHomePage ? (
          <button className={st.logoButton}>
            <Link to="/">
              <img src={logo} className={st.logoImg} alt="dorinvest_logo"></img>
            </Link>
          </button>
        ) : (
          <button className={st.backButton} onClick={() => navigate('/')}>
            <img src={backIcon} className={st.backIcon} alt="Назад"></img>
            <span className={st.homePage}>Главная страница</span>
          </button>
        )}
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
