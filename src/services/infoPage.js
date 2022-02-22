import { createInstance } from '../config/axios.config';

const apiToken = process.env.REACT_APP_API_TOKEN;

const baseUrl = 'https://api.peekalink.io/';

const api = createInstance({
  headers: {
    'X-API-Key': apiToken,
  },
});

export const getInfo = async (url) => {
  const { data } = await api.post(`${baseUrl}`, { link: url });
  return data;
};
