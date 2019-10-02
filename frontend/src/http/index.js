import axios from 'axios';
import { convertObjectToQueryString } from './helpers';

export const config = {
  baseURL: process.env.REACT_APP_API_URL,
  paramsSerializer: (queryParams) => {
    return convertObjectToQueryString(queryParams);
  },
};

const http = axios.create(config);

export default http;
