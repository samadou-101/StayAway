import style from "../../styles/awareness.module.css";
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";
function TimeSpent() {
  return (
    <div className={style["time-spent-container"]}>
      <div className={style["time-spent-title"]}>
        <HistoryToggleOffOutlinedIcon
          sx={{
            color: "orange",
          }}
        />
        <span>Time Spent</span>
      </div>
    </div>
  );
}

export default TimeSpent;
