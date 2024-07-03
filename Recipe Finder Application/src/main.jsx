import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RecipeContext from "./components/Context/RecipeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecipeContext>
      <App />
    </RecipeContext>
  </React.StrictMode>
);
