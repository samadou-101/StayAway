import React from "react";
import Logo from "./header/Logo.tsx";
import Search from "./header/Search.tsx";
import Nav from "./nav/Nav";
import style from "./styles/sidebar.module.css";
import ProfileLogout from "./profile/ProfileLogout";
function Sidebar() {
  return (
    <div className={style["sidebar-container"]}>
      <Logo />
      <div className={style["side-content"]}>
        <Search />
        <Nav />
      </div>
      <ProfileLogout />
    </div>
  );
}

export default Sidebar;
