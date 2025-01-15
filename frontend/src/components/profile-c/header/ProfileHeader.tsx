import style from "../styles/profile.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import Logo from "../../../assets/no-background-logo.png";
import Search from "../../sidebar/header/Search";
function ProfileHeader() {
  return (
    <div className={style["profile-header"]}>
      <div className={style["logo-search"]}>
        <div className={style["pheader-logo"]}>
          <img src={Logo} alt="" />
        </div>
        <Search />
      </div>
      <div className={style["pheader-items"]}>
        <HomeOutlinedIcon
          color="action"
          sx={{
            width: "1.7rem",
            height: "1.7rem",
            cursor: "pointer",
            "&:hover": {
              color: "black",
            },
          }}
        />
        <GroupOutlinedIcon
          color="action"
          sx={{
            width: "1.7rem",
            height: "1.7rem",
            cursor: "pointer",
            "&:hover": {
              color: "black",
            },
          }}
        />
        <ChatBubbleOutlineTwoToneIcon
          color="action"
          sx={{
            width: "25px",
            height: "25px",
            cursor: "pointer",
            "&:hover": {
              color: "black",
            },
          }}
        />
        <NotificationsOutlinedIcon
          color="action"
          sx={{
            width: "1.7rem",
            height: "1.7rem",
            cursor: "pointer",
            "&:hover": {
              color: "black",
            },
          }}
        />
      </div>
      <div className={style["profile-pic"]}>
        <div
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img src={Logo} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
