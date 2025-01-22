import style from "../styles/stories.module.css";
import pic from "../../../assets/nature.jpg";
function Storie() {
  return (
    <div className={style["storie-container-spin"]}>
      <div className={style["story-container"]}>
        <img
          src={
            "https://imgcdn.stablediffusionweb.com/2024/9/8/9bc3b58a-aca9-4f88-9ecc-6ea2217f7790.jpg"
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default Storie;
