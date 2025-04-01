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
    <div className="mx-auto my-4 w-[55%] overflow-hidden rounded-xl border border-gray-300 bg-white shadow-[2px_3px_5px_1px_rgba(0,0,0,0.1)]">
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
