import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentState, setParentState] = useState("");

  const onGettingFun = (setChildState) => {
    setParentState(() => setChildState);
    console.log("sending child function");
  };

  const handleClick = () => {
    if (parentState) {
      parentState("state modified from parent");
    }
  };

  return (
    <div>
      <Child onGettingFun={onGettingFun} />
      {console.log(parentState)}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Parent;
