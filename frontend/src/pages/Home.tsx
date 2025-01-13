import { useEffect } from "react";
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";

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
          paddingLeft: "19.5rem ",
          paddingRight: "19.5rem",
        }}
      >
        <Feed />
      </div>
      <Dashboard />
    </>
  );
}

export default Home;
