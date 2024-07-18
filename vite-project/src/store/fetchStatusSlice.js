import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: 'false', // false: 'PENDING' and true: 'DONE
     currentlyFetching: false,
  },
  reducers: {
    toggleFetchDone: (store, action) => {
      return store;
    },
    toggleFetching: (store, action) => {
      return store;
    },
    markFetchingFinished: (store, action) => {
      return store;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
