import PostStats from "./PostStats";
import style from "./styles/content.module.css";
import TextContainer from "./TextContainer";
function PostContent() {
  return (
    <div className={style["content-container"]}>
      <TextContainer />
      <PostStats />
    </div>
  );
}

export default PostContent;
