import React from 'react';
import './CurrencyCard.css';

const CurrencyCard = ({
  name,
  image,
  current_price,
}) => {
  return (
    <section className="card">
      <div>
        <img src={image} alt={name} className="card-image" />
      </div>
      <h2 className="currency-name">{name}</h2>
      <p className="price">
        Current Price: <span className="price-figures">${current_price}</span>
      </p>
    </section>
  );
};

export default CurrencyCard;
