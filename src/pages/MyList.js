import AddPage from '../components/AddPage';
import Card from '../components/Card';
import MainLayout from '../components/MainLayout';
import usePagesProvider from '../hooks/usePagesProvider';

export default function MyList() {
  const { pages } = usePagesProvider();
  return (
    <main>
      <AddPage />
      <MainLayout title="MyList">
        {pages?.map((page, idx) => (
          <Card page={page} key={idx} />
        ))}
      </MainLayout>
    </main>
  );
}
