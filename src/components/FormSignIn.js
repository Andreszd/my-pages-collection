import Form from './Form';
import Field from './Field';

export default function FormSignIn({ switchForm }) {
  const validate = (value) => {
    if (value?.trim().length === 0) return 'field must be complete';
  };
  return (
    <Form
      className="py-5 w-96 bg-white rounded-lg shadow-lg"
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}>
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
                validate={validate}
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
                validate={validate}
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
