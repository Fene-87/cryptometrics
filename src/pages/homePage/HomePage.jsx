import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails, showModal, updateCurrency } from '../../redux/features/detailsSlice';
import CurrencyHome from '../../components/currencyCard/CurrencyCard';
import Navbar from '../../components/navbar/Navbar';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { currencyList, status, modal } = useSelector((store) => store.details);
  const [type, setType] = useState('usd');

  const handleModal = () => {
    dispatch(showModal());
  };

  const handleType = (name) => {
    setType(name);
    dispatch(updateCurrency(name));
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDetails(type));
    }
  }, [status, dispatch, type]);

  if (status === 'loading') return <div>loading...</div>;

  return (
    <div className="home-page">
      <Navbar type="home" />
      {modal && (
        <div className="modal">
          <p onClick={() => {
            handleType('usd');
            handleModal();
          }}
          >
            Usd
          </p>
          <p onClick={() => {
            handleType('eur');
            handleModal();
          }}
          >
            Euro
          </p>
          <p onClick={() => {
            handleType('gbp');
            handleModal();
          }}
          >
            Pound
          </p>
          <p onClick={() => {
            handleType('jpy');
            handleModal();
          }}
          >
            Japanese Yen
          </p>
          <p onClick={() => {
            handleType('cad');
            handleModal();
          }}
          >
            Canadian Dollar
          </p>
        </div>
      )}
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
