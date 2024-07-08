import { useState } from "react";

const Input = ({ setProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");

  const handleSubmit = () => {
    if (!productName) {
      return setNameError("The Product Name field is required.");
    }
    if (!productPrice) {
      return setPriceError("The Product Price field is required.");
    }
    if (!isNaN(productName)) {
      return setNameError("The Product Name field contains only Characters.");
    }
    if (isNaN(productPrice)) {
      return setPriceError("The Product Price field contains only numbers.");
    }
    setProduct((prev) => [...prev, { productName, productPrice }]);
    setProductName("");
    setProductPrice("");
  };

  return (
    <div>
      <h1>Task Four</h1>
      <p>
        Storing the input data with Product Name and Product Price as an object
        into array, displaying that list data, calculating total Product Price
        using javascript.
      </p>
      <div className="mb">
        <label htmlFor="input">Product Name *</label>
        <input
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <div style={{ color: "red" }}>{nameError}</div>
      </div>
      <div className="mb">
        <label htmlFor="input">Product Price *</label>
        <input
          type="text"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <div style={{ color: "red" }}>{priceError}</div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
