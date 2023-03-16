import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../../redux/features/detailsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { currencyList, status } = useSelector((store) => store.details);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDetails());
    }
  }, [status, dispatch]);

  return (
    <div>
      {currencyList.map((currency) => (
        <div key={currency.id}>{currency.id}</div>
      ))}
    </div>
  );
};

export default HomePage;
