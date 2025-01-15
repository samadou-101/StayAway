import { useEffect } from "react";
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";
import Messages from "../components/chat-c/Messages";

function Home() {
  <Dashboard />;
  <Dashboard />;
  return (
    <>
      <Sidebar />
      <div
        className="home-page-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          paddingLeft: "19.5rem ",
          paddingRight: "19.5rem",
          height: "100%",
        }}
      >
        <Feed />
        {/* <Messages /> */}
      </div>
      <Dashboard />
    </>
  );
}

export default Home;
