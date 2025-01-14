import { BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";
import { Route } from "react-router";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { useEffect } from "react";
import Signup from "./pages/Signup";

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
