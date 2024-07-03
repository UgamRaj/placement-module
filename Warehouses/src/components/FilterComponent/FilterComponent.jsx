import { useSelector } from "react-redux";
import "./FilterComponent.css";

const FilterComponent = ({ filters, setFilters }) => {
  const { cities, clusters } = useSelector((state) => state.warehouse);

  return (
    <div className="filter-container">
      <select
        value={filters.city}
        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
      >
        <option value="">Select City</option>
        {cities.map((city, i) => (
          <option key={i} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select
        value={filters.cluster}
        onChange={(e) => setFilters({ ...filters, cluster: e.target.value })}
      >
        <option value="">Select Cluster</option>
        {clusters.map((cluster, i) => (
          <option key={i} value={cluster}>
            {cluster}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Space Available"
        value={filters.space}
        onChange={(e) => setFilters({ ...filters, space: e.target.value })}
      />
    </div>
  );
};

export default FilterComponent;
