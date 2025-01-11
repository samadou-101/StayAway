import style from "../../styles/awareness.module.css";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
function VideosWatched() {
  return (
    <div className={style["videos-watched-container"]}>
      <div className={style["videos-watched-title"]}>
        <VideocamOutlinedIcon
          sx={{
            color: "purple",
          }}
        />
        <span>Videos Watched</span>
      </div>
      {/* <span style={{ marginLeft: "auto" }}>15</span> */}
    </div>
  );
}

export default VideosWatched;
