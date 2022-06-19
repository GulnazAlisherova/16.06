import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: {
    name: ""
  },
  reducers: {
    change: function (store, action) {
      store.name = action.payload;
    },
  },
});

export default nameSlice.reducer;