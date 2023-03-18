import React from 'react';
import { useSelector } from 'react-redux';
import './CurrencyCard.css';

const CurrencyCard = ({
  name,
  image,
  current_price,
}) => {
  const { currency } = useSelector((store) => store.details);

  return (
    <section className="card">
      <div>
        <img src={image} alt={name} className="card-image" />
      </div>
      <h2 className="currency-name">{name}</h2>
      <p className="price">
        Current Price: <span className="price-figures">{currency === 'usd' ? '$' : currency}{current_price}</span>
      </p>
    </section>
  );
};

export default CurrencyCard;
