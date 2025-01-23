import React from "react";
import FeedHeader from "./header/FeedHeader";
import StoriesSection from "./stories/StoriesSection";
import style from "./styles/feed.module.css";
import Post from "./posts/Post";
import Messages from "../chat-c/Messages";
function Feed() {
  const examplePost = {
    profileName: "John Doe",
    profileID: "123",
    profileMiniBio: "Tech enthusiast, coder, and gamer.",
    profilePictureUrl:
      "https://imgcdn.stablediffusionweb.com/2024/9/8/9bc3b58a-aca9-4f88-9ecc-6ea2217f7790.jpg",
    pContent:
      "This is a sample post content where I share my thoughts on the latest tech trends. ",
    likes: 320,
    comments: "Great post! Very informative.",
    shares: 45,
  };
  return (
    <div className={style["feed-container"]}>
      <FeedHeader />
      <div className={style["content-container"]}>
        <StoriesSection />
        <Post {...examplePost} />
        <Post
          {...examplePost}
          pContent="This is another post and it should be longer than the first one so that I can test the functionality of the read more "
          profilePictureUrl="https://scontent.fczl2-2.fna.fbcdn.net/v/t1.6435-9/117165158_112870720518535_8160016064959681795_n.png?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_BP3O36LHr0Q7kNvgH5C4Om&_nc_zt=23&_nc_ht=scontent.fczl2-2.fna&_nc_gid=AWFx-6tF8oGMCHnyjiAvi_4&oh=00_AYAPR0IUhCFnneo_viZcGCHfb_UthyisheuQ_kiOAt7ScQ&oe=67B89CF4"
        />
        <Post {...examplePost} />
        <Post {...examplePost} />
        <Post {...examplePost} />
        <Post
          {...examplePost}
          pContent="This is another post and it should be longer than the first one so that I can test the functionality of the read more "
          profilePictureUrl="https://scontent.fczl2-2.fna.fbcdn.net/v/t1.6435-9/117165158_112870720518535_8160016064959681795_n.png?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_BP3O36LHr0Q7kNvgH5C4Om&_nc_zt=23&_nc_ht=scontent.fczl2-2.fna&_nc_gid=AWFx-6tF8oGMCHnyjiAvi_4&oh=00_AYAPR0IUhCFnneo_viZcGCHfb_UthyisheuQ_kiOAt7ScQ&oe=67B89CF4"
          profileID="345"
        />
        {/* <Messages /> */}
      </div>
    </div>
  );
}

export default Feed;
