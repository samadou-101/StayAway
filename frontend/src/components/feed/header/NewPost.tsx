import { colors } from "@mui/material";
import style from "../styles/header.module.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
function NewPost() {
  return (
    <div className={style["newpost-container"]}>
      <div style={{ color: "white", fontWeight: "550" }}>Add New Post</div>
      <AddOutlinedIcon sx={{ color: "white" }} />
    </div>
  );
}

export default NewPost;
