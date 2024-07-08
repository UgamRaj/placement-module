import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState("");

  const getProductList = () => {
    if (!product.length) {
      return setTotal("");
    }
    const sum = product.reduce((prev, cumm) => prev + +cumm.productPrice, 0);
    setTotal(sum);
  };

  useEffect(() => {
    getProductList();
  }, [product]);

  return (
    <>
      <Input setProduct={setProduct} />
      <Output total={total} product={product} />
    </>
  );
}

export default App;
