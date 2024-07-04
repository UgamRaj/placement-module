import { useEffect, useState } from "react";
import "./Details.css";

const Details = ({
  weather,
  //   onHandleTarget,
  setAllCitiesData,
}) => {
  //   console.log("🚀 ~ Details ~ weather:", weather);
  const [weatherData, setWeatherData] = useState([]);
  //   console.log("🚀 ~ Details ~ weatherData:", weatherData);
  const [searchData, setSearchData] = useState("");
  const [matchingRow, setmatchingRow] = useState(null);

  const getDateTimeInHours = (date_and_time) => {
    const regex = /,\s*(\d{2})/;
    // return 1;
    const match = date_and_time.match(regex);
    // console.log(match[1]);
    return new Date().getHours() - +match[1];
  };

  useEffect(() => {
    if (Object.keys(weather).length !== 0) {
      return setWeatherData([...weatherData, weather]);
    }
    setWeatherData([]);
  }, [weather]);

  const handleDescriptionChange = (indx, value) => {
    // console.log(weatherData);

    const updatedWeather = [...weatherData];
    updatedWeather[indx].description = value;
    setWeatherData(updatedWeather);
  };

  const handleSearch = () => {
    const index = weatherData.findIndex((entry) =>
      entry.city.toLowerCase().includes(searchData.toLowerCase())
    );

    // const index = weather.findIndex((w) => w.city.toLowerCase() === searchInput.toLowerCase());
    if (index !== -1) {
      setmatchingRow(index);
      setTimeout(() => setmatchingRow(null), 3000);
    }
  };

  //! Here check
  const handleDeleteRowData = (id) => {
    let updatedData = weatherData.map((data) => {
      if (data.id === id) {
        return { ...data, isSelected: false };
      }
      return data;
    });
    updatedData = updatedData.filter((data) => data.id !== id);

    // onHandleTarget(idx);
    setWeatherData(updatedData);
    setAllCitiesData((prevState) =>
      prevState.map((data) =>
        data.id === id ? { ...data, isSelected: !data.isSelected } : data
      )
    );
  };

  return (
    <div className="detailsData">
      <div className="search">
        <input
          type="text"
          placeholder="City Name"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button onClick={handleSearch}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
        </button>
      </div>
      <table>
        <tbody>
          <tr className="tableTitle">
            <td>City</td>
            <td>Description</td>
            <td>Temprature(&#8451;)</td>
            <td>Pressure(hPa)</td>
            <td>Data age(hrs)</td>
            <td>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </svg>
            </td>
          </tr>
          {weatherData && weatherData.length > 0 ? (
            weatherData.map(
              (
                {
                  date_and_time,
                  description,
                  pressure_in_hPa,
                  temp_in_celsius,
                  city,
                  id,
                },
                i
              ) => (
                <tr
                  style={{
                    backgroundColor: `${
                      matchingRow === i ? "yellow" : "white"
                    }`,
                  }}
                  key={id}
                >
                  <td>{city}</td>
                  <td>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) =>
                        handleDescriptionChange(i, e.target.value)
                      }
                      style={{ width: "80%" }}
                    />
                  </td>
                  <td>{temp_in_celsius}</td>
                  <td>{pressure_in_hPa}</td>
                  <td>{getDateTimeInHours(date_and_time)}</td>
                  <td>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleDeleteRowData(id)}
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <th colSpan="6">
                <h2 style={{ textAlign: "center" }}>No DATA</h2>
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
