import React, { useState } from "react";
import st from "./styles.module.css";

const Carousel = ({ images }) => {
  const count_image = images.length;
  const range_image_position = Math.floor(count_image / 2);
  const image_position = Array(count_image).fill().map((element, index) => index - range_image_position);

  const [activePos, setActivePos] = useState(0);

  const update = (newActivePos) => {
    setActivePos(newActivePos);
  };

  const calculateDataPos = (index, activePos) => {
    let relativePos = index - activePos;
    
    switch (relativePos) {
      case -8:
        relativePos = 7;
        break;
      case -9:
        relativePos = 6;
        break;
      case -10:
        relativePos = 5;
        break;
      case -11:
        relativePos = 4;
        break;
      case -12:
        relativePos = 3;
        break;
      case -13:
        relativePos = 2;
        break;
      case -14:
        relativePos = 1;
        break;
    }
    
    switch (relativePos) {
      case 8:
        relativePos = -7;
        break;
      case 9:
        relativePos = -6;
        break;
      case 10:
        relativePos = -5;
        break;
      case 11:
        relativePos = -4;
        break;
      case 12:
        relativePos = -3;
        break;
      case 13:
        relativePos = -2;
        break;
      case 14:
        relativePos = -1;
        break;
    }

    return relativePos;
  };

  return (
    <div className={st.carousel}>
      <ul className={st.carousel__list}>
        {images.map((image, index) => (
          <li
            key={image_position[index]}
            className={st.carousel__item}
            data-pos={calculateDataPos(image_position[index], activePos)}
            onClick={() => update(image_position[index])}
          >
            <img src={image} alt={`${image_position[index]}`}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;