import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDetails, showModal, filter, updateMax, updateMin,
} from '../../redux/features/detailsSlice';
import CurrencyHome from '../../components/currencyCard/CurrencyCard';
import Navbar from '../../components/navbar/Navbar';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { status, modal, filteredList } = useSelector((store) => store.details);

  const handleModal = () => {
    dispatch(showModal());
  };

  const handleFilter = (first, last) => {
    dispatch(updateMin(first));
    dispatch(updateMax(last));
    dispatch(filter());
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDetails());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>loading...</div>;

  return (
    <div className="home-page">
      <Navbar type="home" />
      {modal && (
        <div className="modal">
          <p onClick={() => {
            handleModal();
            handleFilter(0, 10);
          }}
          >
            $0-$10
          </p>
          <p onClick={() => {
            handleModal();
            handleFilter(11, 100);
          }}
          >
            $11-$100
          </p>
          <p onClick={() => {
            handleModal();
            handleFilter(101, 1000);
          }}
          >
            $101-$1000
          </p>
          <p onClick={() => {
            handleModal();
            handleFilter(1001, 10000);
          }}
          >
            $1001-$10000
          </p>
          <p onClick={() => {
            handleModal();
            handleFilter(10001, 100000000);
          }}
          >
            Greater than $10000
          </p>
        </div>
      )}
      <div className="details-home-container">
        {filteredList.map((currency) => (
          <NavLink key={currency.id} to={`/${currency.id}`} className="nav-link">
            <CurrencyHome {...currency} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
