import axios from 'axios';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const instance = axios.create({
  withCredentials: true,
  baseURL: SERVER_URL,
});

export const apis = {};
