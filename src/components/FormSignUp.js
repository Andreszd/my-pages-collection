import { useState } from 'react';
import toast from 'react-hot-toast';

import Form from './Form';
import Field from './Field';

import { emailValidation, basicValidation } from '../helpers/fieldsValidation';

import useAuth from '../hooks/useAuth';

export default function FormSignUp({ switchForm }) {
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (user) => {
    setIsLoading(true);
    const res = await register(user);
    setIsLoading(false);
    if (res.status !== 201) {
      toast.error(res.data?.error?.message);
    } else {
      toast.success('user created successfully');
      switchForm();
    }
  };

  return (
    <Form
      className="py-5 w-full sm:w-96 bg-white rounded-lg shadow-lg"
      initialValues={{ fullName: '', email: '', password: '' }}
      onSubmit={handleSubmit}>
      {(errors) => (
        <>
          <header className="text-center">
            <h2 className="text-3xl font-bold mb-3">Sign up</h2>
            <p className="text-slate-500">Create a account with your email</p>
          </header>
          <main className="px-5 my-8">
            <div className="mb-4">
              <Field
                type="text"
                name="fullName"
                className={`border border-solid ${
                  errors?.fullName ? 'border-red-500' : 'border-slate-300'
                } rounded py-2 px-3 w-full  outline-1 focus:outline-blue-500`}
                validate={basicValidation}
                placeholder="Full Name"
              />
              <span className="text-xs text-red-500">{errors?.fullName}</span>
            </div>
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
                } rounded py-2 px-3 w-full  outline-1 focus:outline-blue-500`}
                validate={basicValidation}
                placeholder="Password"
              />
              <span className="text-xs text-red-500">{errors?.password}</span>
            </div>
            <button
              disabled={isLoading}
              className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 ${
                isLoading ? 'opacity-50' : ''
              }`}>
              Create account
            </button>
          </main>
          <footer className="border-t border-solid border-slate-200 px-5 pt-5">
            <p className="text-sm font-normal">
              Already have an account?{' '}
              <span
                onClick={() => switchForm()}
                className="text-blue-600 cursor-pointer hover:border-b border-solid border-blue-600">
                Sign In
              </span>
            </p>
          </footer>
        </>
      )}
    </Form>
  );
}
