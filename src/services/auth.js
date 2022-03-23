import { api } from './headers';

export const sigin = (body = {}) => api.post(`auth/signIn`, body);

export const signup = async (body = {}) => api.post(`auth/signUp`, body);
