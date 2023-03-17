import React from 'react';
import { useParams } from 'react-router-dom';
import { faChevronLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

const Navbar = () => {
  const { id } = useParams();

  return (
    <div className="navbar">
      <div className="left-header">
        <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        <h3 className="date">2023</h3>
      </div>
      <h2 className="currency">{id}</h2>
      <div className="right-header">
        <FontAwesomeIcon icon={faMicrophone} className="icon" />
        <FontAwesomeIcon icon={faGear} className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
