import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

export default function usePagesProvider() {
  const pagesContext = useContext(PageContext);

  if (pagesContext === undefined)
    throw new Error('usePages must be used whitin PageProvider');

  return pagesContext;
}
