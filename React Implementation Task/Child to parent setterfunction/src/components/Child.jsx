import { useEffect, useState } from "react";

const Child = ({ onGettingFun }) => {
  const [childState, setChildState] = useState("child");

  useEffect(() => {
    onGettingFun(setChildState);

    console.log("child");
  }, [onGettingFun]);

  return <div>Child : {childState}</div>;
};

export default Child;

//? In a React application, pass a setter function from a child component to a parent component. Create a button within the parent component that, when clicked, triggers the setter function to modify a state value.
