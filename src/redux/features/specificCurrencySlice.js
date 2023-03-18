import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currencyDetails: {},
  status: 'idle',
  error: null,
};

export const fetchCurrencyDetails = createAsyncThunk('currency/fetchCurrencyDetails', async (id) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const specificCurrencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrencyDetails.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchCurrencyDetails.fulfilled, (state, { payload }) => ({
        ...state,
        currencyDetails: payload,
        status: 'successful',
      }))
      .addCase(fetchCurrencyDetails.rejected, (state) => ({
        ...state,
        status: 'failed',
      }));
  },
});

export const { resetState } = specificCurrencySlice.actions;
export default specificCurrencySlice.reducer;
