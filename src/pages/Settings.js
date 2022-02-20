import FormUpdateEmail from '../components/FormUpdateEmail';
import FormUpdatePassword from '../components/FormUpdatePassword';

export default function Settings() {
  return (
    <main>
      <article className="flex flex-col gap-y-12 items-center pb-10">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-5">Account</h2>
          <p className="text-slate-600 text-md">Update your profile</p>
        </section>
        <section className="sm:w-3/4 bg-white p-5 border border-solid border-slate-300 rounded ">
          <h2 className="text-2xl font-bold mb-3">Email</h2>
          <FormUpdateEmail />
        </section>

        <section className="sm:w-3/4 bg-white p-5 border border-solid border-slate-300 rounded ">
          <h2 className="text-2xl font-bold mb-3">Change Password</h2>
          <FormUpdatePassword />
        </section>
      </article>
    </main>
  );
}
