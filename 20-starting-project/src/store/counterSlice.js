import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    increase: (state, action) => {
      state.counter += action.payload.amount;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increase, toggle } = storeSlice.actions;
export default storeSlice.reducer;
