import style from "../styles/profile.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import Logo from "../../../assets/logo.png";
import Search from "../../sidebar/header/Search";
function ProfileHeader() {
  return (
    <div className={style["profile-header"]}>
      <div className={style["pheader-logo"]}>
        <img src={Logo} alt="" />
      </div>
      <Search />
      <div className={style["pheader-items"]}>
        <HomeOutlinedIcon
          color="action"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "black",
            },
          }}
        />
        <GroupOutlinedIcon
          color="action"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "black",
            },
          }}
        />
        <NotificationsOutlinedIcon
          color="action"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "black",
            },
          }}
        />
        <ChatBubbleOutlineTwoToneIcon
          color="action"
          sx={{
            width: "20px",
            cursor: "pointer",
            "&:hover": {
              color: "black",
            },
          }}
        />
      </div>
    </div>
  );
}

export default ProfileHeader;
