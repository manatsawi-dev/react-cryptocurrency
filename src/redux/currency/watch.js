import {takeEvery} from 'redux-saga/effects';
import * as TYPES from './type';
import * as currencySaga from './saga';

export function* watchCurrencyMarkets() {
  yield takeEvery(TYPES.CURRENCY_MARKETS_REQ, currencySaga.currencyMarketsAction);
}
