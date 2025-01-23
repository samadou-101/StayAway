import style from "../styles/post.module.css";
import profile_pic from "../../../assets/logo.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Navigate, useNavigate } from "react-router";
interface PostHeaderProps {
  profileName: string;
  profileID: string;
  profileMiniBio: string;
  profilePictureUrl: string;
}
const PostHeader: React.FC<PostHeaderProps> = ({
  profileName,
  profileID,
  profileMiniBio,
  profilePictureUrl,
}) => {
  const navigate = useNavigate();
  const handleProfileNavigation = () => {
    navigate(`/profile/${profileID}`);
  };
  return (
    <div className={style["postheader-container"]}>
      <div className={style["profile-container"]}>
        <div className={style["profilepic"]} onClick={handleProfileNavigation}>
          <img src={profilePictureUrl} alt="profile pic" />
        </div>
        <div className={style["profile-data"]}>
          <strong onClick={handleProfileNavigation}>{profileName}</strong>
          <span>{profileMiniBio}</span>
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
};

export default PostHeader;
