import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
function Feed() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: "0.7rem",
        width: "17.5rem",
        padding: "10px 12px",
      }}
    >
      <HomeOutlinedIcon
        color="action"
        sx={{
          width: "30px",
          height: "30px",
          cursor: "pointer",
          "&:hover": {
            color: "black",
          },
        }}
      />
      <span
        className="nav-item"
        style={{ paddingTop: "", cursor: "default", fontWeight: "450" }}
      >
        Feed
      </span>
    </div>
  );
}

export default Feed;
