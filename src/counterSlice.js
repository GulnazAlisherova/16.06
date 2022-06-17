import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    increment: function (store) {
      store.number++;

    },
    decrement: function (store) {
      store.number--;
    },
    reset: function (store) {
    store.number = 0;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer