import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import st from "./styles.module.css";
import Banner from "./banner/banner";
import AboutExhibition from "./aboutExhibition/aboutExhibition";
import Participants from "./participants/participants";
import PastEvents from "./pastEvents/pastEvents";
import Partners from "./partners/partners";
import FAQ from "./FAQ/FAQ";
import FeedbackForm from "./feedbackForm/feedbackForm";
import threadActive from "../../assets/threadActive.png";
import threadCompleted from "../../assets/threadCompleted.png";
import { DataContext } from "../context/data-context";

const Home = () => {
  const { data } = useContext(DataContext);

  if (!data) {
    return <div>Загрузка...</div>;
  }

  const backgroundImage =
    data.status === "active" ? threadActive : threadCompleted;

  return (
    <div
    className={`${st.container} ${
      data.status === "active"
        ? st.classForThreadActive
        : st.classForThreadCompleted
   }`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Helmet>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
        <meta name="keywords" content={data.meta_keywords} />
      </Helmet>
      <Banner />
      <AboutExhibition description={data.full_description} />
      <Participants />
      <PastEvents />
      <Partners />
      <FAQ />
      <FeedbackForm />
    </div>
  );
};

export default Home;
