import { useState } from "react";
import "./AnnualUncomeTax.css";

const AnnualUncomeTax = ({ setTaxPercentage }) => {
  const taxes = [
    {
      income: "$0 - $18,200",
      taxRate: "0%",
    },
    {
      income: "$18,201 - $45,000",
      taxRate: "Nil + 19% of excess over $18,200",
    },
    {
      income: "$45,001 - $120,000",
      taxRate: "$5,092 + 32.5% of excess over $45,000",
    },
    {
      income: "$120,001 - $180,000",
      taxRate: "$29,467 + 37% of excess over $120,000",
    },
    {
      income: "$180,000+",
      taxRate: "$51,667 + 45% of excess over $180,000",
    },
  ];

  const [selectedTaxRate, setSelectedTaxRate] = useState(taxes[0].taxRate);
  const [selectedIncome, setSelectedIncome] = useState(taxes[0].income);

  const handleSelectChange = (event) => {
    const selectedIncome = event.target.value;
    // console.log("🚀 ~ handleSelectChange ~ selectedIncome:", selectedIncome);

    if (selectedIncome === "$18,201 - $45,000") {
      setTaxPercentage(19);
    } else if (selectedIncome === "$45,001 - $120,000") {
      setTaxPercentage(32.5);
    } else if (selectedIncome === "$120,001 - $180,000") {
      setTaxPercentage(37);
    } else if (selectedIncome === "$180,000+") {
      setTaxPercentage(45);
    }
    const selectedTax = taxes.find((tax) => tax.income === selectedIncome);
    setSelectedIncome(selectedIncome);
    setSelectedTaxRate(selectedTax ? selectedTax.taxRate : "");
  };

  return (
    <>
      <div>
        <p>Enter your Annual Income</p>
        <select
          name="annualIncome"
          className="annualIncome"
          onChange={handleSelectChange}
          value={selectedIncome}
        >
          {taxes.map((tax, index) => (
            <option key={index} value={tax.income}>
              {tax.income}
            </option>
          ))}
        </select>
      </div>

      <div className="taxRate">
        <p>Tax Rate</p>
        <span>{selectedTaxRate}</span>
      </div>
    </>
  );
};

export default AnnualUncomeTax;
