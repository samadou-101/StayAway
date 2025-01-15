import FeedHeader from "../feed/header/FeedHeader";
import style from "./styles/messages.module.css";
import CProfile from "../../assets/tiger.jpeg";
import { FcVideoCall } from "react-icons/fc";
import { IoIosCall } from "react-icons/io";
import { CgMoreVerticalO } from "react-icons/cg";
import MessageOptions from "./MessageOptions";
import ActualChat from "./ActualChat";
function Messages() {
  return (
    <div className={style["messages-container"]}>
      {/* <FeedHeader /> */}
      <div className={style["messages-content"]}>
        <div className={style["chat-list"]}></div>
        <div className={style["conversation"]}>
          <div className={style["conversation-header"]}>
            <div className={style["counterpart-profile"]}>
              <img src={CProfile} alt="" />
            </div>
            <div className={style["conv-options"]}>
              <FcVideoCall className={style["vid-call"]} />
              <IoIosCall className={style["audio-call"]} />
              <CgMoreVerticalO className={style["more-options"]} />
            </div>
          </div>
          <div className={style["messages"]}>
            <ActualChat />
            <MessageOptions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
