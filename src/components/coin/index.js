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
        <CoinHead>
          <CoinImage src={image} alt="crypto" />
          <CoinName>{coinName}</CoinName>
        </CoinHead>
        <CoinSymbol>{coinSymbol}</CoinSymbol>
        <CoinCurrentPrice>${price}</CoinCurrentPrice>
        <CoinVolume>${volume.toLocaleString()}</CoinVolume>
        <CoinChange increase={priceChange > 0}>{priceChange.toFixed(2)}%</CoinChange>
        <CoinMarketCap>MKT Cap: ${marketCap.toLocaleString()}</CoinMarketCap>
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
