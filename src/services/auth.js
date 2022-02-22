import axios from 'axios';

const baseUrl = 'http://localhost:4000';

export const sigin = (body = {}) =>
  axios.post(`${baseUrl}/api/auth/signIn`, body);

export const signup = async (body = {}) =>
  axios.post(`${baseUrl}/api/auth/signUp`, body);
