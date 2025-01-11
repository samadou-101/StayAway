import style from "../styles/post.module.css";
import profile_pic from "../../../assets/logo.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function PostHeader() {
  return (
    <div className={style["postheader-container"]}>
      <div className={style["profile-container"]}>
        <div className={style["profilepic"]}>
          <img src={profile_pic} alt="profile pic" />
        </div>
        <div className={style["profile-data"]}>
          <strong>StayAway</strong>
          <span>Minimalist Social Media App</span>
        </div>
      </div>

      <div className={style["options"]}>
        <MoreVertIcon
          color="action"
          sx={{ cursor: "pointer", "&:hover": { color: "black" } }}
        />
      </div>
    </div>
  );
}

export default PostHeader;
