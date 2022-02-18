import MainLayout from '../components/MainLayout';
import Card from '../components/Card';
import usePagesProvider from '../hooks/usePagesProvider';

export default function Favorities() {
  const { filterBy } = usePagesProvider();

  return (
    <main>
      <MainLayout title="Favorites">
        {filterBy('isFav', true)?.map((page, idx) => (
          <Card page={page} key={idx} />
        ))}
      </MainLayout>
    </main>
  );
}
