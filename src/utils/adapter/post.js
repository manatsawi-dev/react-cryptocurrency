import axios from 'axios';
import * as header from './header';

export const adapterPost = async ({url, body, privateMethod}) => {
  try {
    const reqBody = body || {};
    const headerProvider = header.headers(privateMethod ? header.PRIVATE_POST : header.POST);
    const response = await axios.post(url, reqBody, headerProvider);
    return response;
  } catch (error) {
    return error;
  }
};
