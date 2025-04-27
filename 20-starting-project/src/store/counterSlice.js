import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: 'counter',
  initialState: {counter: 0},
  reducers: {
    increment : (state) => {state.counter += 1},
    decrement : (state) => {state.counter -= 1}
  }
});

export const {increment, decrement} = storeSlice.actions;
export default storeSlice.reducer;