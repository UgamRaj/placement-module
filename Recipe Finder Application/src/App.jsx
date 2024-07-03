import "./App.css";
import Favourite from "./components/Favourite/Favourite";
import Foods from "./components/Foods/Foods";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MealInfo from "./components/MealInfo/MealInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Foods />} />
        <Route path="/:id" element={<MealInfo />} />
        <Route path="/liked" element={<Favourite />} />
        <Route path="/liked/:id" element={<MealInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
