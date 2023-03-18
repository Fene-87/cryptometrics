import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCurrencyDetails, resetState } from '../../redux/features/specificCurrencySlice';
import Navbar from '../../components/navbar/Navbar';
import './DetailsPage.css';

const DetailsPage = () => {
  const { id } = useParams();
  const { currencyDetails, status } = useSelector((store) => store.specificCurrency);
  const { currency } = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const detail = currencyDetails;

  useEffect(() => {
    dispatch(fetchCurrencyDetails(id));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, id]);

  if (status === 'loading') return <div className="loading">loading</div>;

  return (
    <div className="details-page">
      <Navbar />
      <div className="details-container">
        <h1 className="details-id">{currencyDetails.id}</h1>
        <img src={detail.image?.large} alt={currencyDetails.id} className="details-image" />
        <div className="details-info">
          <p className="market-cap-rank">Market Cap Rank: <span>{currencyDetails.market_cap_rank}</span></p>
          <p className="current-price">Current Price: <span>{currency === 'usd' ? '$' : currency}{currencyDetails.market_data?.current_price[currency]}</span></p>
          <p className="market-cap">Market Cap: <span>{currencyDetails.market_data?.market_cap.usd}</span></p>
          <p className="last-updated">Last Updated: <span>{currencyDetails.market_data?.last_updated}</span></p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
