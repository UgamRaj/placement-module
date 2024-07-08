import { useState } from "react";

const Input = ({ setInputVal }) => {
  const [error, setError] = useState("");
  const [val, setVal] = useState("");
  //
  const handleSubmit = () => {
    if (isNaN(val)) {
      return setError("The Sale Price field contains only numbers.");
    }
    if (val < 100) {
      return setError(
        "The Sale Price field must be greater than or eqaul to 100."
      );
    } else if (val > 300) {
      return setError("The Sale Price field must be less than or equal to 300");
    }
    setInputVal(val);
    setError("");
    setVal("");
  };

  return (
    <>
      <h1>Task Three</h1>
      <p>
        Storing input textbox value into an array, displaying that array list,
        then calculating total sale price & total profit using Javascript
      </p>
      <h5>Product Original Price: 100</h5>
      <p className="space">Sale Price*</p>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <div style={{ color: "red" }}>{error}</div>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Input;
