import {all} from 'redux-saga/effects';
import * as watchCurrency from './currency/watch';

export default function* rootSaga() {
  yield all([watchCurrency.watchCurrencyMarkets()]);
}
