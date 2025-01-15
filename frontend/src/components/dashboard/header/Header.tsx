import style from "../styles/header.module.css";
import pic from "../../../assets/no-background-logo.png";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
function Header() {
  return (
    <div className={style["header-container"]}>
      <div className={style["profile"]}>
        <img src={pic} />
      </div>
      <div className={style["msg-stg"]}>
        <div className={style["messages"]}>
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
