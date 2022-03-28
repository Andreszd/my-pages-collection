import { useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signup, sigin } from '../services/auth';
import { getById } from '../services/user';

import toast from 'react-hot-toast';

export default function AuthProvider({ children }) {
  const [isAuthenticate, setAuthenticate] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (!isAuthenticate && user && user.token) {
      authenticate(user.id, user.token);
    }
  }, []);

  const authenticate = async (id, token) => {
    try {
      const { data } = await getById(id, token);
      setUser(data);
      setAuthenticate(true);
    } catch ({ response }) {
      console.error(response);
    }
  };

  const login = async (body) => {
    try {
      const response = await sigin(body);

      const user = response.data;

      const { id, token } = user;

      window.localStorage.setItem('user', JSON.stringify(user));

      await authenticate(id, token);

      toast.success('Welcome');

      return response;
    } catch ({ response }) {
      toast.error(response?.data.error.message);
      return response;
    }
  };

  const setProfile = (urlImg) => {
    setUser({ ...user, urlImg });
  };

  const logout = async () => {
    setAuthenticate(!isAuthenticate);
  };

  const register = async (user) => {
    try {
      const res = await signup(user);
      return res;
    } catch ({ response }) {
      console.error(response?.data?.error);
      return response;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticate,
        login,
        logout,
        register,
        authenticate,
        setProfile,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
