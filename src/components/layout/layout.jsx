import React, { useState, useEffect } from "react";
import axios from "axios";
import st from "./styles.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Content from "../content/content";
import { DataContext } from "../context/data-context";
import ScrollToTop from "../../utils/scrollToTop";

const Layout = () => {
  const [data, setData] = useState({});
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://vistavki.srv9.ru/api/start");
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Ошибка при получении данных", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCats = async () => {
      if (data && data.exposition_id) {
        try {
          const response = await axios.get(
            `https://vistavki.srv9.ru/api/expositions/${data.exposition_id}/cats`
          );
          setCats(response.data.result);
        } catch (error) {
          console.error("Ошибка при получении данных", error);
        }
      }
    };

    fetchCats();
  }, [data]);

  useEffect(() => {
    const fetchDogs = async () => {
      if (data && data.exposition_id) {
        try {
          const response = await axios.get(
            `https://vistavki.srv9.ru/api/expositions/${data.exposition_id}/dogs`
          );
          setDogs(response.data.result);
        } catch (error) {
          console.error("Ошибка при получении данных", error);
        }
      }
    };

    fetchDogs();
  }, [data]);

  return (
    <DataContext.Provider value={{data, cats, dogs}}>
      <div className={st.layout}>
        <ScrollToTop />
        <Header />
        <Content />
        <Footer />
      </div>
    </DataContext.Provider>
  );
};

export default Layout;
