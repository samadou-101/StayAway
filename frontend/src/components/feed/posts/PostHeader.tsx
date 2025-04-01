import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router";

interface PostHeaderProps {
  profileName: string;
  profileID: string;
  profileMiniBio: string;
  profilePictureUrl: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  profileName,
  profileID,
  profileMiniBio,
  profilePictureUrl,
}) => {
  const navigate = useNavigate();
  const handleProfileNavigation = () => {
    navigate(`/profile/${profileID}`);
  };

  return (
    <div className="flex h-20 w-full items-center justify-between border-b border-gray-300 px-4">
      <div className="flex gap-2">
        <div
          className="h-10 w-10 overflow-hidden rounded-full object-cover"
          onClick={handleProfileNavigation}
        >
          <img
            src={profilePictureUrl}
            alt="profile pic"
            className="h-full w-full cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-[0.1rem]">
          <strong className="cursor-pointer" onClick={handleProfileNavigation}>
            {profileName}
          </strong>
          <span className="text-sm">{profileMiniBio}</span>
        </div>
      </div>

      <div>
        <MoreVertIcon
          color="action"
          sx={{ cursor: "pointer", "&:hover": { color: "black" } }}
        />
      </div>
    </div>
  );
};

export default PostHeader;
