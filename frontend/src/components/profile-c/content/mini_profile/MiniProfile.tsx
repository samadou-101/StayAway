import style from "../../styles/profile.module.css";
import style1 from "./styles/miniprofil.module.css";
import pic from "../../../../assets/tiger.jpeg";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiNotePencilLight } from "react-icons/pi";

interface MiniProfileProps {
  profileName: string;
  profileMiniBio: string;
  profilePictureUrl: string;
}
const MiniProfile: React.FC<MiniProfileProps> = ({
  profileName,
  profileMiniBio,
  profilePictureUrl,
}) => {
  return (
    <div className={style["mini-profile-container"]}>
      <div className={style1["mini-profile"]}>
        <div className={style1["main-info"]}>
          <div className={style1["pic-and-name"]}>
            <div className={style1["profile-pic"]}>
              <img src={profilePictureUrl} alt="" />
            </div>
            <div className={style1["user-intro"]}>
              <div className={style1["p-name"]}>
                <span>{profileName}</span>
              </div>
              <div className={style1["mini-bio"]}>
                <span>{profileMiniBio}</span>
              </div>
            </div>
          </div>
          <div className={style1["main-stats"]}>
            <div className={style1["fol-pos"]}>
              <div className={style1["followers"]}>
                <span className={style1["fol-num"]}>10k</span>
                <HiOutlineUsers />
                {/* <span>Followers</span> */}
              </div>
              <div
                style={{
                  height: "100%",
                  width: "1px",
                  background: "black",
                  content: " ",
                }}
              ></div>
              <div className={style1["posts"]}>
                <span className={style1["pos-num"]}>50</span>
                <PiNotePencilLight />
                {/* <span>Posts</span> */}
              </div>
            </div>
          </div>
        </div>
        <div className={style1["actions"]}>
          <div className={style1["follow-user"]}>
            <GroupAddOutlinedIcon
              sx={{
                transition: "all 0.2s ease-in-out",
                "&:hover": { color: "green" },
              }}
            />
          </div>
          <div className={style1["dm"]}>
            <SendOutlinedIcon
              sx={{
                transition: "all 0.2s ease-in-out",
                "&:hover": { color: "blue" },
              }}
            />
          </div>
          <div className={style1["more"]}>
            <MoreVertOutlinedIcon
              sx={{
                transition: "all 0.2s ease-in-out",
                "&:hover": { color: "red" },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniProfile;
