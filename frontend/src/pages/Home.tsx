import { useEffect } from "react";
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";
import Messages from "../components/chat-c/Messages";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/ReduxHooks";

function Home() {
  const isFeedVisible = useAppSelector(
    (state) => state.toggleChatOrFeed.feedVisible
  );
  return (
    <>
      <Sidebar />
      <div
        className="home-page-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "19.5rem ",
          // paddingRight: "19.5rem",
          paddingRight: isFeedVisible ? "19.5rem" : "20.1rem",
          height: "100%",
        }}
      >
        {isFeedVisible ? <Feed /> : <Messages />}
      </div>
      <Dashboard />
    </>
  );
}

export default Home;
