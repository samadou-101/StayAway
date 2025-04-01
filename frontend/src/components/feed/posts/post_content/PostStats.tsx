import Share from "../stats_components/Share";
import Comments from "../stats_components/Comments";
import Like from "../stats_components/Like";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface PostStatsProps {
  likes: number;
  comments: string;
  shares: number;
}

const PostStats: React.FC<PostStatsProps> = ({ likes, comments, shares }) => {
  return (
    <div className="mb-4 flex h-[1.5rem] w-full items-center gap-6 px-4">
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
