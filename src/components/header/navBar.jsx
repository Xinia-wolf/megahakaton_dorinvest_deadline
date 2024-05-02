import React from "react";
import st from "./styles.module.css";
import { menuItemsData } from "./menuItemsData";
import MenuItems from "./menuItems";

const NavBar = () => {
  const depthLevel = 0;

  return (
    <nav className={st.desktop_nav}>
      <ul
        className={st.menus}
        style={{
          height: "28px",
          padding: "0",
          margin: "0",
        }}
      >
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
        <a className={st.navBar_contacts} href="#contacts">Контакты</a>
      </ul>
    </nav>
  );
};

export default NavBar;
