import style from "./styles/stats.module.css";
import ShareIcon from "@mui/icons-material/Share";
const Share: React.FC<{ shares: number }> = ({ shares }) => {
  return (
    <div className={style["share-container"]}>
      <ShareIcon
        color="action"
        sx={{
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
      <span>{shares}</span>
    </div>
  );
};

export default Share;
