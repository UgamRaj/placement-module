import "./App.css";
import Header from "./components/Header/Header";
import Liked from "./components/Liked/Liked";
import Main from "./components/Main/Main";
import SearchBox from "./components/SearchBox/SearchBox";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SearchBox />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/liked" element={<Liked />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
