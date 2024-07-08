import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [soldList, setSoldList] = useState([]);
  const [totalSoldPrice, seTotalSoldPrice] = useState(0);
  const [profit, setProfit] = useState(0);

  const getOutput = () => {
    if (!inputVal) {
      return;
    }
    setSoldList([...soldList, inputVal]);
    seTotalSoldPrice((prev) => +prev + +inputVal);
    setProfit((prev) => +prev + +inputVal - 100);
  };

  useEffect(() => {
    getOutput();
  }, [inputVal]);

  return (
    <>
      <Input setInputVal={setInputVal} />
      <Output
        totalSoldPrice={totalSoldPrice}
        profit={profit}
        soldList={soldList}
      />
    </>
  );
}

export default App;
