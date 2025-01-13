import style from "../styles/search.module.css";
import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <div className={style["container"]}>
      <input type="text" placeholder="Search..." />
      <SearchIcon
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

export default Search;
