import { useState } from "react";
import "./CapitalDiscountLongTerm.css";

const CapitalDiscountLongTerm = ({ isShortTerm, setNetCapital }) => {
  const [capitalAmount, setCapitalAmount] = useState("");
  const [discountLongTerm, setDiscountLongTerm] = useState("0.00");

  const handleChange = (e) => {
    const val = e.target.value;
    setCapitalAmount(e.target.value);

    const discount = val * 0.5;
    setNetCapital(discount);
    setDiscountLongTerm(discount);
    if (val === "") {
      setDiscountLongTerm("0.00");
    }
  };

  return (
    <>
      <div style={{ display: `${isShortTerm ? "none" : ""}` }}>
        <p>Capital gains amount</p>
        <div className="inputContainer">
          <span>A$</span>
          <input
            type="number"
            value={capitalAmount}
            placeholder="Enter amount"
            onChange={handleChange}
          />
        </div>
      </div>
      <div style={{ display: `${isShortTerm ? "none" : ""}` }}>
        <p>Discount for long term gains</p>
        <div className="inputContainer">
          <span>A$</span>
          <input
            type="number"
            value={discountLongTerm}
            placeholder="Enter amount"
            readOnly
          />
        </div>
      </div>
    </>
  );
};

export default CapitalDiscountLongTerm;
