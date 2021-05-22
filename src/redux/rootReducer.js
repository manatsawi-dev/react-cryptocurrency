import {combineReducers} from 'redux';
import {currencyReducer} from './currency/reducer';

export default combineReducers({
  currency: currencyReducer,
});
