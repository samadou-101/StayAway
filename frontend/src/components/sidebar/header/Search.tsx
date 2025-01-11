import style from "../styles/search.module.css";
import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <div className={style["container"]}>
      <SearchIcon
        color="action"
        sx={{
          cursor: "pointer",
          "&:hover": { color: "black" },
        }}
      />
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default Search;
