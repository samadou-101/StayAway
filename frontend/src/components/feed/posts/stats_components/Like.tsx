import style from "./styles/stats.module.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
function Like() {
  return (
    <div className={style["like-container"]}>
      <ThumbUpOffAltIcon
        color="action"
        sx={{
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
      <span>10 Likes</span>
    </div>
  );
}

export default Like;
