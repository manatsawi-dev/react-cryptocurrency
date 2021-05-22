import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as currencyActions from '../redux/currency/action';

const IndexScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currencyActions.currencyMarkets());
  }, [dispatch]);
  return <div />;
};

IndexScreen.propTypes = {};

export default IndexScreen;
