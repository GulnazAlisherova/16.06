import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    increment: function (store) {
      store.number++;
      // store.number +=1;
      //storre.number = store.number+1
    },
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer