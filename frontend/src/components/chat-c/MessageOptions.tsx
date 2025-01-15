import style from "./styles/messages.module.css";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa6";
import { SlPicture } from "react-icons/sl";
import { VscSend } from "react-icons/vsc";
function MessageOptions() {
  return (
    <div className={style["msg-options-container"]}>
      <div className={style["msg-input-container"]}>
        <HiOutlineEmojiHappy className={style["emoji"]} />
        <input type="text" className={style["input"]} placeholder="Aa" />
        <GrAttachment className={style["attachment"]} />
        <SlPicture className={style["send-pic"]} />
        <FaMicrophone className={style["send-audio"]} />
      </div>
      <VscSend className={style["send-msg"]} />
    </div>
  );
}

export default MessageOptions;
