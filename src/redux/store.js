import { configureStore } from "@reduxjs/toolkit";
import { habitReducer } from "./reducers/habitReducer";

const store=configureStore({
  reducer: {
    habitReducer,
  },
});
export default store;