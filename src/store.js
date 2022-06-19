import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import nameReducer from "./nameSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  },
});