import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MarketsView from '../../views/markets';
import Header from '../../components/header';
import * as currencyActions from '../../redux/currency/action';

const MarketsScreen = () => {
  const dispatch = useDispatch();
  const coinsState = useSelector((state) => state.currency.markets.coins);
  const isLoadingState = useSelector((state) => state.currency.markets.loading);

  useEffect(() => {
    dispatch(currencyActions.currencyMarkets());
  }, [dispatch]);

  return (
    <>
      <Header>Cryptocurrency Tracker</Header>
      {isLoadingState && <Header variant="h3">Loading...</Header>}
      <MarketsView data={coinsState} />
    </>
  );
};

MarketsScreen.propTypes = {};

export default MarketsScreen;
