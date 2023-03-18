import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: 'usd',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateCurrency: (state, { payload }) => ({
      ...state,
      status: 'idle',
      currency: payload,
    }),
  },
});

export const { updateCurrency } = filterSlice.actions;
export default filterSlice.reducer;
