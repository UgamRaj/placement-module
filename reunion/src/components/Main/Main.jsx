import Card from "../Card/Card";
import { useMyContext } from "../Context/MyContext";
import "./Main.css";
// import allAccommodation from "../../property.json";

const Main = () => {
  const { allAccom } = useMyContext();

  return (
    <div className="mainContainer">
      {allAccom?.map((accommodation, i) => (
        <Card key={i} {...accommodation} />
      ))}
    </div>
  );
};

export default Main;
