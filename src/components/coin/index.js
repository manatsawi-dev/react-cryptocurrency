import React from 'react';
import PropTypes from 'prop-types';
import {
  CoinWrapper,
  CoinContainer,
  CoinImage,
  CoinName,
  CoinSymbol,
  CoinCurrentPrice,
  CoinVolume,
  CoinChange,
  CoinMarketCap,
  CoinHead,
} from './styled-component';

const componentName = (props) => {
  const {image, coinName, coinSymbol, price, volume, priceChange, marketCap} = props;
  return (
    <CoinWrapper id="coin-wrapper">
      <CoinContainer id="coin-row">
        <CoinHead id="coin-head">
          <CoinImage id="coin-image" src={image} alt="crypto" />
          <CoinName id="coin-name">{coinName}</CoinName>
        </CoinHead>
        <CoinSymbol id="coin-symbol">{coinSymbol}</CoinSymbol>
        <CoinCurrentPrice id="coin-current-price">${price}</CoinCurrentPrice>
        <CoinVolume id="coin-volume">${volume.toLocaleString()}</CoinVolume>
        <CoinChange id="coin-change" increase={priceChange > 0}>
          {priceChange.toFixed(2)}%
        </CoinChange>
        <CoinMarketCap id="coin-market-cap">MKT Cap: ${marketCap.toLocaleString()}</CoinMarketCap>
      </CoinContainer>
    </CoinWrapper>
  );
};

componentName.propTypes = {
  image: PropTypes.string.isRequired,
  coinName: PropTypes.string.isRequired,
  coinSymbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
};

export default componentName;
