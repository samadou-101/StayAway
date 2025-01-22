import PostStats from "./PostStats";
import style from "./styles/content.module.css";
import TextContainer from "./TextContainer";
interface PostContentProps {
  pContent: string;
  likes: number;
  comments: string;
  shares: number;
}
const PostContent: React.FC<PostContentProps> = ({
  pContent,
  likes,
  comments,
  shares,
}) => {
  return (
    <div className={style["content-container"]}>
      <TextContainer pContent={pContent} />
      <PostStats likes={likes} comments={comments} shares={shares} />
    </div>
  );
};

export default PostContent;
