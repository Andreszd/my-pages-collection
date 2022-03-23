import { api } from './headers';

const authHeader = () => {
  const token = window.localStorage.getItem('token');
  return token && token.length > 0 ? { Authorization: `Bearer ${token}` } : {};
};

const setHeaders = (headers = {}) => {
  return { header: { ...headers, ...authHeader() } };
};

export const getById = (id) => api.get(`user/${id}`, { header: authHeader() });

export const updateProfileImage = (id, body) => {
  api.post(
    `user/${id}`,
    body,
    setHeaders({ 'Content-Type': 'multipart/form-data' })
  );
};
