import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../../redux/features/detailsSlice';
import { fetchCurrencyDetails } from '../../redux/features/specificCurrencySlice';
import CurrencyHome from '../../components/currencyCard/CurrencyCard';
import './HomePage.css';

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
      <div className="details-container">
        {currencyList.map((currency) => (
          <NavLink to={`/${currency.id}`}>
            <div>
              <CurrencyHome key={currency.id} {...currency} />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
