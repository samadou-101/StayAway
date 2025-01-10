import { BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";
import { Route } from "react-router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
