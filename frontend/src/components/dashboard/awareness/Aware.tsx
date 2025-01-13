import style from "../styles/awareness.module.css";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import AwareStats from "./awareness_stats/AwareStats";
function Aware() {
  return (
    <div className={style["aware-container"]}>
      <div className={style["awr-header"]}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className={style["spn1"]}>Awareness</span>
        </div>
        <div className={style["awr-details"]}>
          <QueryStatsOutlinedIcon
            sx={{
              color: "#38b000",
              cursor: "pointer",
              "&:hover": { color: "black" },
            }}
          />
        </div>
      </div>
      <AwareStats />
    </div>
  );
}

export default Aware;
