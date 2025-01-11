import React from "react";
import style from "../../styles/awareness.module.css";
import PostsSeen from "./PostsSeen";
import TimeSpent from "./TimeSpent";
import VideosWatched from "./VideosWatched";

function AwareStats() {
  return (
    <div className={style["awrstat-container"]}>
      <TimeSpent />
      <PostsSeen />
      <VideosWatched />
    </div>
  );
}

export default AwareStats;
