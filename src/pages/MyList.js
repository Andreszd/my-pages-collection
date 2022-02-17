import AddPage from '../components/AddPage';
import Card from '../components/Card';
import usePagesProvider from '../hooks/usePagesProvider';

export default function MyList() {
  const { pages } = usePagesProvider();
  console.log('render');
  return (
    <main>
      <AddPage />
      <article className="px-12">
        <h2 className="font-medium text-slate-600 tracking-wider my-4">
          My List
        </h2>
        <div className="grid grid-cols-3 gap-y-7 gap-x-5">
          {pages?.map((page, idx) => (
            <Card page={page} key={idx} />
          ))}
        </div>
      </article>
    </main>
  );
}
