import axios from 'axios';
import qs from 'querystring';
import * as header from './header';

export const adapterGet = async ({url, body, privateMethod}) => {
  try {
    const headerProvider = header.headers(privateMethod ? header.PRIVATE_GET : header.GET);
    if (body) {
      const response = await axios.get(`${url}?${qs.stringify(body)}`, headerProvider);
      return response;
    }
    const response = await axios.get(`${url}`, headerProvider);
    return response;
  } catch (error) {
    return error;
  }
};

export const adapterGetWithParams = async ({url, body, privateMethod}) => {
  try {
    const headerProvider = header.headers(privateMethod ? header.PRIVATE_GET : header.GET);
    const response = await axios.get(url, {params: body, headers: headerProvider});
    return response;
  } catch (error) {
    return error;
  }
};
