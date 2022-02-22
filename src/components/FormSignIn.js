import { useNavigate } from 'react-router-dom';

import Form from './Form';
import Field from './Field';

import { emailValidation, basicValidation } from '../helpers/fieldsValidation';

import useAuth from '../hooks/useAuth';

export default function FormSignIn({ switchForm }) {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (user) => {
    const res = await login(user);
    if (res.status === 200) navigate('/my-list');
  };

  return (
    <Form
      className="py-5 w-full sm:w-96 bg-white rounded-lg shadow-lg"
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}>
      {(errors) => (
        <>
          <header className="text-center">
            <h2 className="text-3xl font-bold mb-3">Sign in</h2>
            <p className="text-slate-500">Sign in with you email here</p>
          </header>
          <main className="px-5 my-8">
            <div className="mb-4">
              <Field
                type="email"
                name="email"
                className={`border border-solid ${
                  errors?.email ? 'border-red-500' : 'border-slate-300'
                } rounded py-2 px-3 w-full  outline-1 focus:outline-blue-500`}
                validate={emailValidation}
                placeholder="Email"
              />
              <span className="text-xs text-red-500">{errors?.email}</span>
            </div>
            <div className="mb-4">
              <Field
                type="password"
                name="password"
                className={`border border-solid ${
                  errors?.password ? 'border-red-500' : 'border-slate-300'
                } rounded py-2 px-3 w-full outline-1 focus:outline-blue-500`}
                validate={basicValidation}
                placeholder="Password"
              />
              <span className="text-xs text-red-500">{errors?.password}</span>
            </div>
            <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
              Sign in
            </button>
          </main>
          <footer className="border-t border-solid border-slate-200 px-5 pt-5">
            <p className="text-sm font-normal">
              Don't have an account?{' '}
              <span
                onClick={() => switchForm()}
                className="text-blue-600 cursor-pointer hover:border-b border-solid border-blue-600">
                Sign Up
              </span>
            </p>
          </footer>
        </>
      )}
    </Form>
  );
}
