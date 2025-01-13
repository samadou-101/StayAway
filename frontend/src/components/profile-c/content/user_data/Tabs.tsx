import style from "./styles/user-data.module.css";
function Tabs() {
  return (
    <div className={style["tab-container"]}>
      <input
        type="radio"
        name="tab"
        id="tab1"
        className={`${style["tab"]} ${style["tab--1"]}`}
      />
      <label className={style["tab_label"]} htmlFor="tab1">
        About
      </label>
      <input
        type="radio"
        name="tab"
        id="tab2"
        className={`${style["tab"]} ${style["tab--2"]}`}
      />
      <label className={style["tab_label"]} htmlFor="tab2">
        Followers
      </label>
      <input
        type="radio"
        name="tab"
        id="tab3"
        className={`${style["tab"]} ${style["tab--3"]}`}
      />
      <label className={style["tab_label"]} htmlFor="tab3">
        Posts
      </label>
      <input
        type="radio"
        name="tab"
        id="tab4"
        className={`${style["tab"]} ${style["tab--4"]}`}
      />
      <label className={style["tab_label"]} htmlFor="tab4">
        Images
      </label>
      <div className={style["indicator"]}></div>
    </div>
  );
}

export default Tabs;
