import containerStyle from "../../styles/profile.module.css";
import Tabs from "../user_data/Tabs";
import Posts from "./posts/Posts";
import style from "./styles/user-data.module.css";

function ProfileData() {
  return (
    <div className={containerStyle["user-data-container"]}>
      <div className={style["selected-tab-container"]}>
        <Posts />
      </div>
    </div>
  );
}

export default ProfileData;
