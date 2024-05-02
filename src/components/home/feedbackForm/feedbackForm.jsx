import React, { useState } from "react";
import st from "./styles.module.css";
import cat from "../../../assets/черный кот 1.png";
import ball from "../../../assets/клубочек.png";

const FeedbackForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className={st.feedbackForm_container}>
      <span className={st.imageCaption}>
        Раскрась жизнь еще одного друга яркими красками!
      </span>
      <img src={cat} className={st.imageCat} alt="black-cat"></img>
      <img src={ball} className={st.imageBall} alt="ball-of-threads"></img>
      <div className={st.formContainer}>
        <h3 className={st.formHeader}>Форма обратной связи</h3>
        <form onSubmit={handleSubmit} className={st.feedbackForm}>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            className={st.formInput}
            required
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="Телефон"
            className={st.formInput}
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="E-mail"
            className={st.formInput}
            required
          />

          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Сообщение"
            className={st.formTextarea}
            required
          />

          <button type="submit" className={st.submitButton}>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
