import axios from "axios";
import { useEffect, useState } from "react";

const Card = ({ data, getDtata, updateCache }) => {
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setAllData(data);
  }, [data]);

  useEffect(() => {
    getDtata(10 * page);
  }, [page]);

  const handleCheckboxChange = async (id) => {
    setAllData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );

    const item = allData.find((item) => item.id === id);
    const updatedCompleted = !item.completed;

    try {
      const item = allData.find((item) => item.id === id);
      await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        completed: !item.completed,
      });
      updateCache(id, updatedCompleted);
    } catch (error) {
      console.log("Error updating item:", error);
    }
  };
  const handleNext = () => setPage(page + 1);
  const handlePrev = () => page > 0 && setPage(page - 1);

  return (
    <>
      <h1>Todos</h1>
      <div className="cardMain">
        {allData?.map((item) => {
          return (
            <>
              <div className="card" key={item.id}>
                <h5>Title: {item.title}</h5>
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <span>Completed</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <button onClick={handlePrev} disabled={page === 0}>
        Prev
      </button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Card;
