import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currencyList: [],
  status: 'idle',
  error: null,
  modal: false,
  currency: 'usd',
};

export const fetchDetails = createAsyncThunk('details/fetchDetails', async (type) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${type}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    showModal: (state) => ({
      ...state,
      modal: !state.modal,
    }),
    updateCurrency: (state, { payload }) => ({
      ...state,
      status: 'idle',
      currency: payload,
    }),
  },
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

export const { showModal, updateCurrency } = detailsSlice.actions;
export default detailsSlice.reducer;
