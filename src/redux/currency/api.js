import host from '../../env/develop.json';
import {adapterGet} from '../../utils/adapter/get';

export const currencyMarkets = async () => {
  const API_URL = `${host.API_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  const response = await adapterGet({url: API_URL});
  return response;
};
