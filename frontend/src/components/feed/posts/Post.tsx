import style from "../styles/post.module.css";
import PostContent from "./post_content/PostContent.tsx";
import PostHeader from "./PostHeader";
import PostInteractions from "./PostInteractions";
const Post: React.FC = () => {
  return (
    <div className={style["post-container"]}>
      <PostHeader />
      <PostContent />
      <PostInteractions />
    </div>
  );
};

export default Post;
