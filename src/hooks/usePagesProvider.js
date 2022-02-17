import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

export default function usePagesProvider() {
  const { pages, addPage } = useContext(PageContext);

  return { pages, addPage };
}
