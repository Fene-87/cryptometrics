import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { faChevronLeft, faMicrophone, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, fetchDetails } from '../../redux/features/detailsSlice';
import './Navbar.css';

const Navbar = ({ type }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.details);

  const handleModal = () => {
    dispatch(showModal());
  };

  const handleReset = () => {
    if (status === 'idle') {
      dispatch(fetchDetails());
    }
  };

  return (
    <div className="navbar">
      <div className="left-header">
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        </NavLink>
        <h3 className="date">2023</h3>
      </div>
      <h2 className="currency">{type === 'home' ? 'CryptoMetrics' : id}</h2>
      <div className="right-header">
        <FontAwesomeIcon icon={faMicrophone} className="icon" />
        <p
          className="icon"
          onClick={() => {
            handleModal();
            handleReset();
          }}
        >
          filter
          <FontAwesomeIcon icon={faChevronDown} className="icon" />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
