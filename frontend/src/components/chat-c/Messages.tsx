import FeedHeader from "../feed/header/FeedHeader";
import style from "./styles/messages.module.css";
function Messages() {
  return (
    <div className={style["messages-container"]}>
      {/* <FeedHeader /> */}
      <div className={style["messages-content"]}>
        <div className={style["chat-list"]}></div>
        <div className={style["conversation"]}>
          <div className={style["conversation-header"]}></div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
