import Feed from "./Feed";
import Friends from "./Friends";
import Explore from "./Explore";
import Favorites from "./Favorites";
import Analytics from "./Analytics";
import Notifications from "./Notifications";
import Create from "./Create";

function Nav() {
  return (
    <div className="mt-10 flex flex-col gap-1">
      <Feed />
      <Friends />
      <Explore />
      <Favorites />
      <Analytics />
      <Notifications />
      <Create />
    </div>
  );
}

export default Nav;
