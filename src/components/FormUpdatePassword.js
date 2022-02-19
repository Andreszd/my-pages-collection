import Form from './Form';
import Field from './Field';

export default function FormUpdatePassword() {
  return (
    <Form initialValues={{ currentPassword: '', newPassword: '' }}>
      {() => (
        <div className="">
          <label className="block text-xs mb-2 font-medium text-slate-500">
            Current Password
          </label>
          <Field
            type="password"
            name="currentPassword"
            className={`border border-solid mb-4 border-slate-300 rounded py-2 px-3 w-full  outline-1 focus:outline-blue-500`}
            placeholder="current Password"
          />
          <label className="block text-xs mb-2 font-medium text-slate-500">
            New Password
          </label>
          <Field
            type="password"
            name="newPassword"
            className={`border border-solid mb-4 border-slate-300 rounded py-2 px-3 w-full  outline-1 focus:outline-blue-500`}
            placeholder="New Password"
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
