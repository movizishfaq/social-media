// src/redux/reducer.js
import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./Theme";
// import userReducer from "./UserSlice"; // Ensure this is the correct path

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;
