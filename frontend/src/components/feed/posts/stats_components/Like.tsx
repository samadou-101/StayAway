import style from "./styles/stats.module.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
const Like: React.FC<{ likes: number }> = ({ likes }) => {
  return (
    <div className={style["like-container"]}>
      <ThumbUpOffAltIcon
        color="action"
        sx={{
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
      <span>{likes}</span>
    </div>
  );
};

export default Like;
