import React from "react";
import image from "../../../assets/logo.png";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
function ProfileLogout() {
  return (
    <div
      className="contaienr"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        width: "17.5rem",
        height: "4.3rem",
        paddingRight: "1rem",
        marginTop: "auto",
      }}
    >
      <div
        className="image-container"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          style={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <span style={{ fontWeight: "600", cursor: "pointer" }}>Profile Name</span>

      <LogoutOutlinedIcon
        color="action"
        sx={{
          marginLeft: "auto",
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
    </div>
  );
}

export default ProfileLogout;
