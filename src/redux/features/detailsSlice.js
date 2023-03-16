import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

const initialState = {
  currencyList: [],
  status: 'idle',
  error: null,
};

export const fetchDetails = createAsyncThunk('details/fetchDetails', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchDetails.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchDetails.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const tempArray = [];
        keys.forEach((key) => {
          tempArray.push(payload[key]);
        });
        state.currencyList = [...tempArray];
        state.status = 'successful';
      })
      .addCase(fetchDetails.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export default detailsSlice.reducer;
