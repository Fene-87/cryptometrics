import { configureStore } from '@reduxjs/toolkit';
import filterSlice, { updateCurrency } from '../redux/features/filterSlice';

describe('filterSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        filter: filterSlice,
      },
    });
  });

  it('sets the currency filter', () => {
    store.dispatch(updateCurrency('eur'));

    expect(store.getState().filter.currency).toEqual('eur');
  });
});
