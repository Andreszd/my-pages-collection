import axios from 'axios';

export const createInstance = (opt) => {
  return axios.create(opt);
};
