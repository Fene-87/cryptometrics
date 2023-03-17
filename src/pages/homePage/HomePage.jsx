import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../../redux/features/detailsSlice';
import CurrencyHome from '../../components/currencyCard/CurrencyCard';
import Navbar from '../../components/navbar/Navbar';
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
    <div className="home-page">
      <Navbar type="home" />
      <div className="details-home-container">
        {currencyList.map((currency) => (
          <NavLink key={currency.id} to={`/${currency.id}`} className="nav-link">
            <CurrencyHome {...currency} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
