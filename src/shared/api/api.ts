import axios from 'axios';
import { USER_LS_KEY } from 'shared/consts/localStorage';

const baseURL = __API_URL__;
export const $api = axios.create({
  baseURL,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = localStorage.getItem(USER_LS_KEY) || '';
  }

  return config;
});
