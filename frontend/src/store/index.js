import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice,
    fetchStatus: fetchStatusSlice,
    bag: bagSlice,
  }
});

export default myntraStore;