import { api, getAuthHeader } from './headers';

export const setProfileImage = (userId, body) => {
  return api.post(`images/profile/${userId}`, body, {
    headers: {
      ...getAuthHeader(),
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getProfileImage = (code) => {
  return api.get(`images/profile/${code}`, {
    headers: {
      ...getAuthHeader(),
    },
    responseType: 'blob',
  });
};
