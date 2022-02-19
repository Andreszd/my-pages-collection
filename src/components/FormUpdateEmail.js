import Form from './Form';
import Field from './Field';

export default function FormUpdateEmail() {
  return (
    <Form initialValues={{ email: '' }}>
      {() => (
        <div className="">
          <label className="block text-xs mb-2 font-medium text-slate-500">
            Email address
          </label>
          <Field
            type="email"
            name="email"
            className={`border border-solid mb-4 border-slate-300 rounded py-2 px-3 w-full  outline-1 focus:outline-blue-500`}
            placeholder="Email"
          />
          <div className="flex flex-row-reverse w-full">
            <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
              Save
            </button>
          </div>
        </div>
      )}
    </Form>
  );
}
