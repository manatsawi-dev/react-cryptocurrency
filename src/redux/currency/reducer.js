import * as TYPES from './type';

const initState = {
  markets: {
    loading: false,
    coins: null,
    error: null,
  },
};

export const currencyReducer = (state = initState, {type, payload = {}}) => {
  switch (type) {
    case TYPES.CURRENCY_MARKETS_REQ:
      return {...state, markets: {error: null, loading: true}};
    case TYPES.CURRENCY_MARKETS_SUCCESS:
      return {...state, markets: {coins: payload, loading: false}};
    case TYPES.CURRENCY_MARKETS_FAIL:
      return {...state, markets: {error: payload, loading: false}};
    default:
      return state;
  }
};
