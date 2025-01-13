import style from "../styles/header.module.css";
import NewPost from "./NewPost";
import SearchBar from "./SearchBar";
function FeedHeader() {
  return (
    <div className={style["header-container"]}>
      {/* <SearchBar /> */}
      {/* <NewPost /> */}
    </div>
  );
}

export default FeedHeader;
