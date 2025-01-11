import { useEffect } from "react";
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";

function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 10);
    console.log("test");
  }, []);
  return (
    <>
      <Sidebar />
      <div
        className="home-container"
        style={{
          display: "flex",
          paddingLeft: "19.5rem ",
        }}
      >
        <Feed />
        <Dashboard />
      </div>
    </>
  );
}

export default Home;
