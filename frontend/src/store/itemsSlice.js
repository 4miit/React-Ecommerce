import {createSlice} from "@reduxjs/toolkit";
import DATABASE_ITEMS from "../data/items";

const itemsSlice = createSlice({
  name: 'items',
  initialState: DATABASE_ITEMS,
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice.reducer;