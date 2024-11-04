import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./Userslice"; // Ensure this matches the file name exactly
// import themeSlice from "./Theme"; // Assuming this file exists and is named Theme.js
import postSlice from "./postslice"; // Ensure this matches the file name exactly
import themeReducer from "./themeSlice"; // Ensure this path is correct
const rootReducer = combineReducers({
  User: userSlice, // Corrected variable name
  Theme: themeSlice,
  Post: postSlice, // Corrected variable name
});

export default rootReducer;
