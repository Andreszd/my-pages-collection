import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

export default function usePagesProvider() {
  const { addPage } = useContext(PageContext);

  return { addPage };
}
