import style from "../styles/header.module.css";
import pic from "../../../assets/no-background-logo.png";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/ReduxHooks";
import { toggleChatOrFeed } from "../../../redux/slices/chatOrFeedSlice";
function Header() {
  // const isFeedVisible = useAppSelector(
  //   (state) => state.toggleChatOrFeed.feedVisible
  // );
  const dispatch = useAppDispatch();
  return (
    <div className={style["header-container"]}>
      <div className={style["profile"]}>
        <img src={pic} />
      </div>
      <div className={style["msg-stg"]}>
        <div
          onClick={() => dispatch(toggleChatOrFeed())}
          className={style["messages"]}
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
        <div className={style["settings"]}>
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
