import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: "counter",
  initialState: { // первоначальное состояние
    number: 0,
  },
  reducers: { // изменяет состояние
    increment: function (store) {
      store.number++;
    },
    decrement: function (store) {
      store.number--;
    },
    reset: function (store) {
      store.number = 0;
    },
    set: function (store, action) {
      console.log(action);
      store.number = action.payload;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer