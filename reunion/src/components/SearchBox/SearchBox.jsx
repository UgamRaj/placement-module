import { useState } from "react";
import PropertyType from "../PropertyType/PropertyType";
import SelectPrice from "../SelectPrice/SelectPrice";
import "./SearchBox.css";
import { useMyContext } from "../Context/MyContext";

const SearchBox = () => {
  const [city, setCity] = useState("All");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("All");
  const [error, setError] = useState("");
  const { setAllAccom, allAccommodation } = useMyContext();

  const filterAccommodations = () => {
    // console.log(allAccom);
    let filtered = [...allAccommodation];
    // console.log("🚀 ~ filterAccommodations ~ filtered:", filtered);

    if (city !== "All") {
      filtered = filtered.filter((accommodation) => {
        const normalizedCity = city.toLowerCase();
        const normalizedAddress = accommodation.address.toLowerCase();

        const address = normalizedAddress.split(/[, ]+/);
        // console.log("🚀 ~ filtered=filtered.filter ~ address:", address);
        return address.some((part) => part === normalizedCity);
      });
    }

    if (date) {
      filtered = filtered.filter(
        (accommodation) =>
          new Date(accommodation.dateAvailable) >= new Date(date)
      );
    }

    if (price) {
      const priceRange = price.split("-"); // Extract min and max prices
      const minPrice = parseFloat(priceRange[0]);
      const maxPrice = parseFloat(priceRange[1]);
      filtered = filtered.filter(
        (accommodation) =>
          accommodation.price >= minPrice && accommodation.price <= maxPrice
      );
    }
    console.log("🚀 ~ filterAccommodations ~ filtered:", filtered);

    if (propertyType !== "All") {
      filtered = filtered.filter(
        (accommodation) => accommodation.propertyType === propertyType
      );
    }
    // console.log("🚀 ~ filterAccommodations ~ filtered:", filtered);
    setError("");
    setAllAccom(filtered); // Update filtered state
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (date && new Date(date) < new Date()) {
      setError("**Please Provide Valid Date");
      return;
    }
    // console.log("price", price);
    // console.log("date", date);
    // console.log("city", city);
    // console.log("propertyType", propertyType);

    filterAccommodations();

    // setCity('All')
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="searchForm">
          <div>
            <label htmlFor="city">Enter City</label>
            <br />
            <input
              className="searchCommon"
              type="text"
              required
              autoComplete="off"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search City"
            />
          </div>

          <div>
            <label htmlFor="date">Date</label> <br />
            <input
              className="searchCommon"
              type="date"
              id="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
            <p style={{ color: "red", marginTop: "-10px" }}>{error}</p>
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <br />
            <SelectPrice onPriceChange={setPrice} price={price} />
          </div>

          <div>
            <label htmlFor="propertyType">Property Type</label>
            <br />
            <PropertyType
              onPropertyTypeChange={setPropertyType}
              propertyType={propertyType}
            />
          </div>
          <div className="submitBtn">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
