import { createSlice } from "@reduxjs/toolkit";
import allHouses from "../components/WareHouse.json";

const getCities = () => {
  const cities = allHouses.map(({ city }) => city);
  return [...new Set(cities)];
};

const getAllCluster = () => {
  const clusters = allHouses.map(({ cluster }) => cluster);
  return [...new Set(clusters)];
};

const initialState = {
  allHouses: allHouses,
  loading: false,
  cities: getCities(),
  clusters: getAllCluster(),
};

// console.log(initialState);
export const WarehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    updateWarehouse: (state, action) => {
      // console.log("state.allHouses", state.allHouses);
      const index = state.allHouses.findIndex(
        (w) => w.id === action.payload.id
      );
      if (index !== -1) {
        state.allHouses[index] = action.payload;
      }
    },
    searchInWareHouse: (state, action) => {
      // console.log("🚀 ~ action:", action);

      const filteredWarehouses = allHouses.filter((w) => {
        return (
          w.name
            .toLowerCase()
            .includes(action.payload.searchInput.toLowerCase()) &&
          (action.payload.filters.city
            ? w.city === action.payload.filters.city
            : true) &&
          (action.payload.filters.cluster
            ? w.cluster === action.payload.filters.cluster
            : true) &&
          (action.payload.filters.space
            ? w.space_available >= action.payload.filters.space
            : true)
        );
      });
      state.allHouses = filteredWarehouses;
      // console.log(
      //   "🚀 ~ filteredWarehouses ~ filteredWarehouses:",
      //   filteredWarehouses
      // );
    },
  },
});

export const { updateWarehouse, searchInWareHouse } = WarehouseSlice.actions;

export default WarehouseSlice.reducer;
