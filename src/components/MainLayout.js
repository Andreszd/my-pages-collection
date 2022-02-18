export default function MainLayout({ title, children }) {
  return (
    <article className="px-12">
      <h2 className="font-bold text-slate-600  my-4 pb-3 text-2xl border-b border-solid border-slate-300">
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-y-7 gap-x-5">{children}</div>
    </article>
  );
}
