import style from "../styles/stories.module.css";
import Storie from "./Storie";
function Stories() {
  return (
    <>
      <div className={style["stories-container"]}>
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
      </div>
    </>
  );
}

export default Stories;
