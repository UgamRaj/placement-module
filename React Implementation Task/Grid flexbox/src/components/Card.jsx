import { useState } from "react";
import "./Card.css";

const Card = ({ title }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleColor = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`card ${isToggled ? "toggled" : ""}`}
      onClick={toggleColor}
      style={{ cursor: "pointer" }}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
