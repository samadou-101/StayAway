import Share from "../stats_components/Share";
import Comments from "../stats_components/Comments";
import Like from "../stats_components/Like";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import style from "./styles/content.module.css";
interface PostStatsProps {
  likes: number;
  comments: string;
  shares: number;
}
const PostStats: React.FC<PostStatsProps> = ({ likes, comments, shares }) => {
  return (
    <div className={style["poststats-container"]}>
      <Like likes={likes} />
      <Comments comments={comments} />
      <Share shares={shares} />
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
};

export default PostStats;
