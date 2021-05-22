import * as TYPES from './type';

const initState = {
  init: null,
};

export const currencyReducer = (state = initState, {type, payload = {}}) => {
  switch (type) {
    case TYPES.CURRENCY_TEST_REQ:
      return state;
    case TYPES.CURRENCY_TEST_SUCCESS:
      return {...state, payload};
    case TYPES.CURRENCY_TEST_FAIL:
      return {...state, payload};
    default:
      return state;
  }
};
