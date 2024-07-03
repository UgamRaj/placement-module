import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import WareHouseDetails from "./components/WareHouseDetails/WareHouseDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warehouse/:id" element={<WareHouseDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
