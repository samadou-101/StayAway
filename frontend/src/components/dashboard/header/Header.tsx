import pic from "../../../assets/no-background-logo.png";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { toggleChatOrFeed } from "../../../redux/slices/chatOrFeedSlice";

function Header() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex h-[4.2rem] w-full items-center border-b border-gray-500 p-4">
      <div className="h-10 w-10 overflow-hidden rounded-full">
        <img src={pic} className="h-full w-full" />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <div
          onClick={() => dispatch(toggleChatOrFeed())}
          className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border border-gray-500"
        >
          <ChatBubbleOutlineTwoToneIcon
            color="action"
            sx={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
              "&:hover": { color: "black" },
            }}
          />
        </div>
        <div className="flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border border-gray-500">
          <SettingsOutlinedIcon
            color="action"
            sx={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
              "&:hover": { color: "black" },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
