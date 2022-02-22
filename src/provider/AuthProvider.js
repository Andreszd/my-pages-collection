import { useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signup, sigin } from '../services/auth';
import { getById } from '../services/user';

import toast from 'react-hot-toast';

export default function AuthProvider({ children }) {
  const [isAuthenticate, setAuthenticate] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!isAuthenticate && token) {
      const id = localStorage.getItem('idUser');
      authenticate(id, token);
    }
  }, []);

  const login = async (user) => {
    try {
      const response = await sigin(user);

      const { id, token } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('idUser', id);

      await authenticate(id, token);
      toast.success('Welcome');

      return response;
    } catch ({ response }) {
      toast.error(response?.data.error.message);
      return response;
    }
  };

  const logout = async () => {
    setAuthenticate(!isAuthenticate);
  };

  const authenticate = async (id, token) => {
    try {
      const { data } = await getById(id, token);
      setUser(data);
      setAuthenticate(true);
    } catch ({ response }) {
      console.error(response);
    }
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
      value={{ user, isAuthenticate, login, logout, register, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
}
