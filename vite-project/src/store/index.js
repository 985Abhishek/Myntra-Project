import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";

//creating store
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});
export default myntraStore;
