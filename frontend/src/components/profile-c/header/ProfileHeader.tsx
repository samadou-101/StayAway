import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import Logo from "../../../assets/no-background-logo.png";
import Search from "../../sidebar/header/Search";
import { useNavigate } from "react-router";

function ProfileHeader() {
  const navigate = useNavigate();

  return (
    <div className="fixed left-1/2 flex h-[4.5rem] w-[68.7%] -translate-x-1/2 items-center justify-between gap-4 rounded-br-[20px] rounded-bl-[20px] border border-t-0 border-gray-300 px-4 py-2">
      <div className="flex w-fit items-center justify-between gap-4">
        <div
          className="flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="" className="h-full w-full" />
        </div>
        <Search />
      </div>
      <div className="flex items-center gap-12">
        <HomeOutlinedIcon
          color="action"
          sx={{
            width: "1.7rem",
            height: "1.7rem",
            cursor: "pointer",
            "&:hover": { color: "black" },
          }}
        />
        <GroupOutlinedIcon
          color="action"
          sx={{
            width: "1.7rem",
            height: "1.7rem",
            cursor: "pointer",
            "&:hover": { color: "black" },
          }}
        />
        <ChatBubbleOutlineTwoToneIcon
          color="action"
          sx={{
            width: "25px",
            height: "25px",
            cursor: "pointer",
            "&:hover": { color: "black" },
          }}
        />
        <NotificationsOutlinedIcon
          color="action"
          sx={{
            width: "1.7rem",
            height: "1.7rem",
            cursor: "pointer",
            "&:hover": { color: "black" },
          }}
        />
      </div>
      <div>
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <img src={Logo} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
