import PostStats from "./PostStats";
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
    <div className="flex w-full flex-col gap-4 bg-white">
      <TextContainer pContent={pContent} />
      <PostStats likes={likes} comments={comments} shares={shares} />
    </div>
  );
};

export default PostContent;
