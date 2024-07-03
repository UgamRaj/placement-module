import { useState } from "react";
import WareHouseCard from "../WareHouseCard/WareHouseCard";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import FilterComponent from "../FilterComponent/FilterComponent";
import { searchInWareHouse } from "../../Store/WarehouseSlice";

const Home = () => {
  const { allHouses } = useSelector((state) => state.warehouse);
  const [searchInput, setSearchInput] = useState("");
  const [filters, setFilters] = useState({ city: "", cluster: "", space: "" });
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchInWareHouse({ searchInput, filters }));
  };

  return (
    <>
      <h1>Ware House</h1>
      <div className="search">
        <FilterComponent filters={filters} setFilters={setFilters} />
        <input
          placeholder="Search..."
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="button" onClick={handleSearch}>
          <span className="button__span">Search</span>
        </button>
      </div>

      <div className="houseMain">
        {allHouses?.map((house) => (
          <WareHouseCard house={house} key={house.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
