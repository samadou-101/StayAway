import React from "react";
import FeedHeader from "./header/FeedHeader";
import StoriesSection from "./stories/StoriesSection";
import style from "./styles/feed.module.css";
import Post from "./posts/Post";
import Messages from "../chat-c/Messages";
function Feed() {
  return (
    <div className={style["feed-container"]}>
      <FeedHeader />
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
        {/* <Messages /> */}
      </div>
    </div>
  );
}

export default Feed;
