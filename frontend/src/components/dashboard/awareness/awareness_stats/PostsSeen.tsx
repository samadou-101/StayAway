import React from "react";
import style from "../../styles/awareness.module.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
function PostsSeen() {
  return (
    <div className={style["posts-seen-container"]}>
      <div className={style["posts-seen-title"]}>
        <VisibilityOutlinedIcon
          sx={{
            color: "blue",
          }}
        />
        <span>Posts Seen</span>
      </div>
    </div>
  );
}

export default PostsSeen;
