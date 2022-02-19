import { useState } from 'react';
import FormSignIn from '../components/FormSignIn';
import FormSignUp from '../components/FormSignUp';

export default function SignInSignOut() {
  const [currentForm, setCurrentForm] = useState(false);
  const switchForm = () => setCurrentForm(!currentForm);
  return (
    <div className="mx-auto grid place-items-center px-20 bg-slate-100 min-h-screen">
      {currentForm ? (
        <FormSignIn switchForm={switchForm} />
      ) : (
        <FormSignUp switchForm={switchForm} />
      )}
    </div>
  );
}
