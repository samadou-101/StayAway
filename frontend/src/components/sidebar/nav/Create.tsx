import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

function Create() {
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
        cursor: "pointer",
      }}
    >
      <AddBoxOutlinedIcon
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
        style={{ paddingTop: "", cursor: "pointer", fontWeight: "450" }}
      >
        Create
      </span>
    </div>
  );
}

export default Create;
