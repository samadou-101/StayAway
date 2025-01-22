import style from "../styles/post.module.css";
import profile_pic from "../../../assets/logo.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
interface PostHeaderProps {
  profileName: string;
  profileMiniBio: string;
  profilePictureUrl: string;
}
const PostHeader: React.FC<PostHeaderProps> = ({
  profileName,
  profileMiniBio,
  profilePictureUrl,
}) => {
  return (
    <div className={style["postheader-container"]}>
      <div className={style["profile-container"]}>
        <div className={style["profilepic"]}>
          <img src={profilePictureUrl} alt="profile pic" />
        </div>
        <div className={style["profile-data"]}>
          <strong>{profileName}</strong>
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
