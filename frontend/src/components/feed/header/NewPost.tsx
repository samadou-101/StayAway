import style from "../styles/header.module.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
function NewPost() {
  return (
    <div className={style["newpost-container"]}>
      <span className={style["add-post"]}>Add New Post</span>
      <AddOutlinedIcon
        sx={{
          color: "white",
          transition: "0.2s ease-in-out",
          "&:hover": { color: "black" },
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default NewPost;
