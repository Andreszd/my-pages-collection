import axios from 'axios';

const baseUrl =
  process.env.NODE === 'develop'
    ? process.env.REACT_APP_LOCAL_BACKEND_URL
    : REACT_APP_BACKEND_URL;

export const sigin = (body = {}) =>
  axios.post(`${baseUrl}/api/auth/signIn`, body);

export const signup = async (body = {}) =>
  axios.post(`${baseUrl}/api/auth/signUp`, body);
