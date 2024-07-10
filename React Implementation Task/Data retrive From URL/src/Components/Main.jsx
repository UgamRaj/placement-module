import { useState, useEffect, useRef, useCallback } from "react";
import Card from "./Card";
import axios from "axios";
import Loader from "./Loader";

const Main = () => {
  const [data, setData] = useState([]);
  const cacheData = useRef({});
  const [isData, setIsData] = useState(false);

  const getDtata = useCallback(async (start = 0) => {
    if (cacheData.current[start]) {
      setIsData(true);
      setData(cacheData.current[start]);
      return;
    }

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=10`
      );

      const uniqueData = response.data.reduce((acc, current) => {
        const x = acc.find((item) => item.title === current.title);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
      setIsData(true);
      cacheData.current[start] = uniqueData;
      setData(uniqueData);
    } catch (error) {
      console.log("🚀 ~ getDtata ~ error:", error);
    }
  }, []);

  useEffect(() => {
    getDtata(0);
  }, []);

  const updateCache = (id, completed) => {
    for (let key in cacheData.current) {
      cacheData.current[key] = cacheData.current[key].map((item) =>
        item.id === id ? { ...item, completed } : item
      );
    }
  };

  return (
    <div>
      {!isData ? (
        <Loader />
      ) : (
        <Card data={data} getDtata={getDtata} updateCache={updateCache} />
      )}
    </div>
  );
};

export default Main;
