import Share from "../stats_components/Share";
import Comments from "../stats_components/Comments";
import Like from "../stats_components/Like";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import style from "./styles/content.module.css";
function PostStats() {
  return (
    <div className={style["poststats-container"]}>
      <Like />
      <Comments />
      <Share />
      <BookmarkBorderIcon
        color="action"
        sx={{
          cursor: "pointer",
          marginLeft: "auto",
          "&:hover": { color: "black" },
        }}
      />
    </div>
  );
}

export default PostStats;
