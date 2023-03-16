import { configureStore } from '@reduxjs/toolkit';
import detailsSlice from './features/detailsSlice';
import specificCurrencySlice from './features/specificCurrencySlice';

const store = configureStore({
  reducer: {
    details: detailsSlice,
    specificCurrency: specificCurrencySlice,
  },
});

export default store;
