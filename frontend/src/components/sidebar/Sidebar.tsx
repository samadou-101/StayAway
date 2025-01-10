import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Nav from "./nav/Nav";
import style from "./styles/sidebar.module.css";
import ProfileLogout from "./profile/ProfileLogout";
function Sidebar() {
  return (
    <div className={style["sidebar-container"]}>
      <Logo />
      <Search />
      <Nav />
      <ProfileLogout />
    </div>
  );
}

export default Sidebar;
