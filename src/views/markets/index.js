import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Coin from '../../components/coin';
import {MarketWrapper, SearchWrapper, Input} from './styled-component';

const MarketsView = (props) => {
  const {data} = props;
  const [filteredCoins, setFilteredCoins] = useState();

  useEffect(() => {
    if (data && data.length) {
      setFilteredCoins(() => data);
    }
  }, [data]);

  const onChangeSearch = (key) => {
    if (!key || !data) {
      setFilteredCoins(() => data);
      return;
    }
    setFilteredCoins(() => {
      return data.filter((x) => x.name.toLowerCase().includes(key.toLowerCase()) || x.symbol.toLowerCase().includes(key.toLowerCase()));
    });
  };

  if (!filteredCoins) {
    return null;
  }

  return (
    <>
      <SearchWrapper>
        <Input name="s-coin" placeholder="coin name" onChange={(val) => onChangeSearch(val.target.value)} />
      </SearchWrapper>
      <MarketWrapper id="mkt-wrapper">
        {filteredCoins.map((item, index) => {
          return (
            <Coin
              key={index.toString()}
              image={item.image}
              coinName={item.name}
              coinSymbol={item.symbol.toUpperCase()}
              price={item.current_price}
              marketCap={item.market_cap}
              priceChange={item.price_change_percentage_24h}
              volume={item.total_volume}
            />
          );
        })}
      </MarketWrapper>
    </>
  );
};

MarketsView.propTypes = {
  data: PropTypes.array,
};

MarketsView.defaultProps = {
  data: [],
};

export default MarketsView;
