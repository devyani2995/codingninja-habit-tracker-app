// Importing the configureStore function to create the Redux store
import { configureStore } from "@reduxjs/toolkit";
// Importing the habitReducer
import { habitReducer } from "./reducers/habitReducer";

//  Creating the Redux store using configureStore
const store = configureStore({
  reducer: {
    // Define the habitReducer for the store
    habitReducer,
  },
});

// Export the store so it can be provided to the app through the Provider component
export default store;