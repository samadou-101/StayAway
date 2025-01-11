import React from "react";
import FeedHeader from "./header/FeedHeader";
import StoriesSection from "./stories/StoriesSection";
import style from "./styles/feed.module.css";
import Post from "./posts/Post";
function Feed() {
  return (
    <div className={style["feed-container"]}>
      <FeedHeader />
      {/* <hr
        style={{
          marginTop: "23px",
          borderTop: "0.1px solid  #94A3B8",
        }}
      /> */}
      <div className={style["content-container"]}>
        <StoriesSection />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
