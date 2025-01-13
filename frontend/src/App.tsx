import { BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";
import { Route } from "react-router";
import Profile from "./pages/Profile";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 10);
    console.log("test");
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
