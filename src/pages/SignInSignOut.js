import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import FormSignIn from '../components/FormSignIn';
import FormSignUp from '../components/FormSignUp';

import useAuth from '../hooks/useAuth';

export default function SignInSignOut() {
  const [currentForm, setCurrentForm] = useState(true);
  const { isAuthenticate } = useAuth();

  const switchForm = () => setCurrentForm(!currentForm);

  if (isAuthenticate) return <Navigate to="/my-list" />;

  return (
    <div className="mx-auto grid place-items-center sm:px-20 bg-slate-100 min-h-screen">
      {currentForm ? (
        <FormSignIn switchForm={switchForm} />
      ) : (
        <FormSignUp switchForm={switchForm} />
      )}
    </div>
  );
}
