import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencyList: [],
  status: 'idle',
}

const detailsSlice = createSlice({
  name: 'details',
  initialState,
});

export default detailsSlice.reducer;
