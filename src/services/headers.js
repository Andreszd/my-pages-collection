import { createInstance } from '../config/axios.config';

const baseURL =
  process.env.NODE === 'develop'
    ? process.env.REACT_APP_LOCAL_BACKEND_URL
    : process.env.REACT_APP_BACKEND_URL;

export const getAuthHeader = () => {
  let user = JSON.parse(window.localStorage.getItem('user'));
  return {
    Authorization: `Bearer ${user.token}`,
  };
};

export const api = createInstance({ baseURL });
