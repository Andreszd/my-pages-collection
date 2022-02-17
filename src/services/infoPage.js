import { createInstance } from '../config/axios.config';

const apiToken = '4f0045a8-f138-4c52-8c20-d1fd137a5837';

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
