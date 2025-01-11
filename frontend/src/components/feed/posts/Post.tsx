import style from "../styles/post.module.css";
import PostContent from "./post_content/PostContent.tsx";
import PostHeader from "./PostHeader";
import PostInteractions from "./PostInteractions";
function Post() {
  return (
    <div className={style["post-container"]}>
      <PostHeader />
      <PostContent />
      <PostInteractions />
    </div>
  );
}

export default Post;
