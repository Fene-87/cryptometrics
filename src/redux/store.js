import { configureStore } from '@reduxjs/toolkit';
import detailsSlice from './features/detailsSlice';
import specificCurrencySlice from './features/specificCurrencySlice';
import filterSlice from './features/filterSlice';

const store = configureStore({
  reducer: {
    details: detailsSlice,
    specificCurrency: specificCurrencySlice,
    filter: filterSlice,
  },
});

export default store;
