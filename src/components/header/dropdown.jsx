import React from "react";
import st from "./styles.module.css";
import closeButton from "../../assets/closeButton.svg";
import MenuItems from "./menuItems";

const Dropdown = ({ submenus, dropdown, depthLevel, closeDropdown }) => {
  depthLevel = depthLevel + 1;

  return (
    <ul className={`${st.dropdown} ${dropdown ? st.show : ""}`}>
      <button className={st.closeButton} onClick={closeDropdown}>
        <img src={closeButton} className={st.closeButtonIcon} alt="close-button"></img>
      </button>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
