import style from "./styles/stats.module.css";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
const Comments: React.FC<{ comments: string }> = ({ comments }) => {
  return (
    <div className={style["comments-container"]}>
      <SmsOutlinedIcon
        color="action"
        sx={{
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
      <span>{comments}</span>
    </div>
  );
};

export default Comments;
