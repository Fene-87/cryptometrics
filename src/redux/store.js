import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "./features/detailsSlice";

const store = configureStore({
  reducer: {
    details: detailsSlice,
  }
});

export default store;
