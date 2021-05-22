import {put, call} from 'redux-saga/effects';
import * as API from './api';
import * as TYPES from './type';

export function* currencyMarketsAction() {
  try {
    const response = yield call(API.currencyMarkets);
    if (response.status === 200) {
      yield put({
        type: TYPES.CURRENCY_MARKETS_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: TYPES.CURRENCY_MARKETS_FAIL,
      payload: error,
    });
  }
}
