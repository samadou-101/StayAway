import style from "./styles/stats.module.css";
import ShareIcon from "@mui/icons-material/Share";
function Share() {
  return (
    <div className={style["share-container"]}>
      <ShareIcon
        color="action"
        sx={{
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
      <span>10 Share</span>
    </div>
  );
}

export default Share;
