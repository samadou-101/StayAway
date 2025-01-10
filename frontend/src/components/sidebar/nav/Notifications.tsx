import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
function Notifications() {
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
      <NotificationsOutlinedIcon
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
        Notifications
      </span>
    </div>
  );
}

export default Notifications;
