import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCurrencyDetails, resetState } from '../../redux/features/specificCurrencySlice';

const DetailsPage = () => {
  const { id } = useParams();
  const { currencyDetails, status } = useSelector((store) => store.specificCurrency);
  const dispatch = useDispatch();
  const detail = currencyDetails;

  useEffect(() => {
    dispatch(fetchCurrencyDetails(id));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, id]);

  if (status === 'loading') return <div>loading</div>;

  return (
    <div>
      <h1>{currencyDetails.id}</h1>
      <img src={detail.image?.large} alt={currencyDetails.id} />
      <p />
      <h3>{currencyDetails.hashing_algorithm}</h3>
      <h3>{currencyDetails.market_cap_rank}</h3>
      <h4>{detail.image?.small}</h4>
    </div>
  );
};

export default DetailsPage;

// dispatch(fetchCurrencyDetails(currency.id));