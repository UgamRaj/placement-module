import { useState } from "react";
import "./InvestmentType.css";

const InvestMentType = ({ setIsShortTerm, getShotLontTerm = () => {} }) => {
  const [selected, setSelected] = useState("");

  const handleButtonClick = (type) => {
    setSelected(type);
    // getShotLontTerm(type);
    if (type === "short") {
      setIsShortTerm(true);
    } else {
      setIsShortTerm(false);
    }
    // console.log("🚀 ~ handleButtonClick ~ type:", type);
  };

  return (
    <div>
      <p>Investment Type</p>
      <div className="investmentType">
        <div>
          <button
            className={`termsBtn ${selected === "short" ? "selected" : ""}`}
            onClick={() => handleButtonClick("short")}
          >
            <p>Short Term</p>
            <span className={`tick ${selected === "short" ? "visible" : ""}`}>
              &#10003;
            </span>
          </button>
          <p className="months">{"< 12 months"}</p>
        </div>
        <div>
          <button
            className={`termsBtn ${selected === "long" ? "selected" : ""}`}
            onClick={() => handleButtonClick("long")}
          >
            <p>Long Term</p>
            <span className={`tick ${selected === "long" ? "visible" : ""}`}>
              &#10003;
            </span>
          </button>
          <p className="months">{"> 12 months"}</p>
        </div>
      </div>
    </div>
  );
};

export default InvestMentType;
