import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function AuthProvider({ children }) {
  const [isAuthenticate, setAuthenticate] = useState(false);

  const login = () => {
    setAuthenticate(!isAuthenticate);
  };

  const logout = () => {
    setAuthenticate(!isAuthenticate);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticate, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
