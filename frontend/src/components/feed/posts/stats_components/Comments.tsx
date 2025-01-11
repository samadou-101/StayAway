import style from "./styles/stats.module.css";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
function Comments() {
  return (
    <div className={style["comments-container"]}>
      <SmsOutlinedIcon
        color="action"
        sx={{
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
      <span>10 Comments</span>
    </div>
  );
}

export default Comments;
