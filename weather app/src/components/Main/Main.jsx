import { useState } from "react";
import Details from "../Details/Details";
import Sidebar from "../Sidebar/Sidebar";
import "./Main.css";
import axios from "axios";

const Main = () => {
  const allCities = [
    {
      id: 1,
      cityName: "Las Vegas",
      isSelected: false,
    },
    {
      id: 2,
      cityName: "London",
      isSelected: false,
    },
    {
      id: 3,
      cityName: "Los Angeles",
      isSelected: false,
    },
    {
      id: 4,
      cityName: "New York",
      isSelected: false,
    },
  ];
  //   const [count, setCount] = useState(-1);

  const [allCitiesData, setAllCitiesData] = useState(allCities);
  //   const [selected, setSelected] = useState([]);
  const [weather, setWeather] = useState({});

  const onHandleTarget = () => {
    // const newIndx = (count + 1) % allCities.length;
    // setCount(newIndx);
    let flag = false;
    for (let i = 0; i < allCitiesData.length; i++) {
      if (!allCitiesData[i].isSelected && !flag) {
        flag = true;
        getWeatherData(allCitiesData[i].cityName, allCitiesData[i].id);
        setAllCitiesData((prevState) =>
          prevState.map((city, index) =>
            index === i ? { ...city, isSelected: !city.isSelected } : city
          )
        );
      }
    }
  };

  const getWeatherData = async (city, id) => {
    try {
      const response = await axios.get(
        `https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname=${city}`
      );

      setWeather({ ...response.data, city, id });
      console.log("search");
    } catch (error) {
      console.log("🚀 ~ getWeatherData ~ error:", error);
    }
  };

  return (
    <main>
      <Sidebar
        // getWeatherData={getWeatherData}
        onHandleTarget={onHandleTarget}
        // selected={selected}
        allCitiesData={allCitiesData}
      />

      <Details
        weather={weather}
        // setCount={setCount}
        onHandleTarget={onHandleTarget}
        setAllCitiesData={setAllCitiesData}
        allCitiesData={allCitiesData}
      />
    </main>
  );
};

export default Main;
