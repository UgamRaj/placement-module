import { useEffect, useState } from "react";
import AnnualUncomeTax from "../AnnualUncomeTax/AnnualUncomeTax";
import CapitalDiscountLongTerm from "../CapitalDiscountLongTerm/CapitalDiscountLongTerm";
import Dropdown from "../Dropdown/Dropdown";
import InvestMentType from "../InvestmentType/InvestMentType";
import "./Crypto.css";

const Crypto = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [expenses, setExpenses] = useState("");
  const [isShortTerm, setIsShortTerm] = useState(false);
  const [profit, setProfit] = useState("0.00");
  const [taxPay, setTaxPay] = useState("0.00");
  const [netCapital, setNetCapital] = useState("");

  const [taxPercentage, setTaxPercentage] = useState(0);

  useEffect(() => {
    if (isShortTerm && salePrice && purchasePrice && expenses) {
      const val = salePrice - purchasePrice - expenses;
      setProfit(val);
    }
  }, [isShortTerm]);

  useEffect(() => {
    if (netCapital && netCapital >= 0) {
      //   console.log("🚀 ~ useEffect ~ netCapital:", netCapital);
      setProfit(netCapital);
      if (taxPercentage > 0) {
        const newAmount = ((netCapital * taxPercentage) / 100).toFixed(2);
        // console.log("🚀 ~ useEffect ~ newAmount:", newAmount);
        setTaxPay(newAmount);
      }
    }
  }, [netCapital, taxPercentage]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "purchase") {
      setPurchasePrice(value);
    } else if (name === "sale") {
      setSalePrice(value);
    } else if (name === "expenses") {
      setExpenses(value);
      if (isShortTerm) {
        const val = salePrice - purchasePrice - value;
        setProfit(val);
      }
    }

    // setProfit(netCapital);
  };
  return (
    <div className="main">
      <h1>Free Crypto Tax Calculator - Australia</h1>
      <div className="mainContainer">
        <div className="cryptoTop">
          {console.log(taxPercentage)}
          <div className="financialYear">
            <p>Financial Year</p>
            <select name="" id="">
              <option value="">FY 2023-24</option>
            </select>
          </div>
          <div className="country">
            <p>Country </p>
            <Dropdown />
          </div>
        </div>

        <div className="cryptoBottom">
          <div>
            <p>Enter purchase price of the Crypto</p>
            <div className="inputContainer">
              <span>A$</span>
              <input
                type="number"
                name="purchase"
                value={purchasePrice}
                placeholder="Enter amount"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <p>Enter sale price of the Crypto</p>
            <div className="inputContainer">
              <span>A$</span>
              <input
                type="number"
                name="sale"
                value={salePrice}
                placeholder="Enter amount"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <p>Enter your Expenses</p>
            <div className="inputContainer">
              <span>A$</span>
              <input
                type="number"
                name="expenses"
                value={expenses}
                placeholder="Enter amount"
                onChange={handleChange}
              />
            </div>
          </div>

          <InvestMentType
            setIsShortTerm={setIsShortTerm}
            // getShotLontTerm={getShotLontTerm}
          />

          <AnnualUncomeTax setTaxPercentage={setTaxPercentage} />

          <CapitalDiscountLongTerm
            isShortTerm={isShortTerm}
            setNetCapital={setNetCapital}
          />

          <div className="totalProfit">
            <p>Net Capital gains tax amount</p>
            <p className="profitAmount">A${profit}</p>
          </div>

          <div className="totalProfit">
            <p>The tax you need to pay*</p>
            <p className="taxPay">A${taxPay}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
