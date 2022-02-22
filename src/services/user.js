import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const addAuthorization = (token) => ({ Authorization: `Bearer ${token}` });

export const getById = (id, token) =>
  axios.get(`${baseUrl}/api/user/${id}`, addAuthorization(token));
