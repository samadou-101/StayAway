import style from "../styles/stories.module.css";
import pic from "../../../assets/nature.jpg";
function Storie() {
  return (
    <div className={style["storie-container-spin"]}>
      <div className={style["story-container"]}>
        <img src={pic} alt="" />
      </div>
    </div>
  );
}

export default Storie;
