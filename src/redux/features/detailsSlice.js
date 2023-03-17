import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currencyList: [],
  filteredList: [],
  status: 'idle',
  error: null,
  modal: false,
  currency: 'usd',
  min: 0,
  max: 0,
};

export const fetchDetails = createAsyncThunk('details/fetchDetails', async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
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
    filter: (state) => {
      const filteredState = state.currencyList;
      const tempArray = filteredState.filter((filterState) => {
        return filterState.current_price >= state.min && filterState.current_price <= state.max;
      });
      state.filteredList = [...tempArray];
    },
    updateMin: (state, { payload }) => {
      state.min = payload;
      console.log(state.min);
    },
    updateMax: (state, { payload }) => {
      state.max = payload;
      console.log(state.max);
    },
    resetState: (state) => ({
      ...state,
      status: 'idle',
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
        state.filteredList = [...tempArray];
        state.status = 'successful';
      })
      .addCase(fetchDetails.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      }));
  },
});

export const {
  showModal, updateCurrency, filter, updateMax, updateMin, resetState,
} = detailsSlice.actions;
export default detailsSlice.reducer;
