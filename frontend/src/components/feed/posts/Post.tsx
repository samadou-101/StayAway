import style from "../styles/post.module.css";
import PostContent from "./post_content/PostContent.tsx";
import PostHeader from "./PostHeader";
import PostInteractions from "./PostInteractions";

export interface PostProps {
  // Post Header
  profileName: string;
  profileID: string;
  profileMiniBio: string;
  profilePictureUrl: string;
  // Post Content
  pContent: string;
  // Post Interactions
  likes: number;
  comments: string;
  shares: number;
}

const Post: React.FC<PostProps> = ({
  profileName,
  profileID,
  profileMiniBio,
  profilePictureUrl,
  pContent,
  likes,
  comments,
  shares,
}) => {
  return (
    <div className={style["post-container"]}>
      <PostHeader
        profileName={profileName}
        profileID={profileID}
        profileMiniBio={profileMiniBio}
        profilePictureUrl={profilePictureUrl}
      />
      <PostContent
        pContent={pContent}
        likes={likes}
        comments={comments}
        shares={shares}
      />
      <PostInteractions />
    </div>
  );
};

export default Post;
