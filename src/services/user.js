import { api, getAuthHeader } from './headers';

export const getById = (id) =>
  api.get(`user/${id}`, { headers: getAuthHeader() });
