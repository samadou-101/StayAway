import SearchIcon from "@mui/icons-material/Search";
import style from "../styles/header.module.css";
function SearchBar() {
  return (
    <div className={style["searchbar-container"]}>
      <input
        type="text"
        placeholder="Search for friends, pages, groups"
        style={{ outline: "none", border: "none", width: "75%" }}
      />
      <SearchIcon
        color="action"
        sx={{
          cursor: "pointer",
          marginLeft: "auto",
          "&:hover": { color: "black" },
        }}
      />
    </div>
  );
}

export default SearchBar;
