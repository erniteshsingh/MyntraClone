import { createSlice } from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS } from "../data/Items";
const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addIntitialItem: (state, action) => {
      return action.payload;
    },
  },
});
export const itemActions = itemSlice.actions;
export default itemSlice;
