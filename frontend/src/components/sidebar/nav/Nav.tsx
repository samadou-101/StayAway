import Feed from "./Feed";
import Friends from "./Friends";
import Explore from "./Explore";
import Favorites from "./Favorites";
import style from "./styles/nav.module.css";
import Analytics from "./Analytics";
import Notifications from "./Notifications";
function Nav() {
  return (
    <div className={style["nav-container"]}>
      <Feed />
      <Friends />
      <Explore />
      <Favorites />
      <Analytics />
      <Notifications />
    </div>
  );
}

export default Nav;
