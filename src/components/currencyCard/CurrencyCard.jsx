import React from 'react';

const CurrencyCard = ({
  id,
  name,
  image,
  current_price,
  last_updated,
}) => {
  return (
    <section>
      <div>
        <img src={image} alt="image" />
      </div>
      <h2>{name}</h2>
      <p>{current_price}</p>
    </section>
  );
};

export default CurrencyCard;
