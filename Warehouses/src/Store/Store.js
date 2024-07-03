import { configureStore } from "@reduxjs/toolkit";

import WarehouseSlice from "./WarehouseSlice";

export const store = configureStore({
  reducer: {
    warehouse: WarehouseSlice,
  },
});
