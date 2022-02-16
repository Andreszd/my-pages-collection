import { useState } from 'react';

import { PageContext } from '../context/PageContext';

export default function PageProvider({ children }) {
  const [pages, setPages] = useState([]);

  const addPage = (page) => {
    setPages([...pages, page]);
  };

  return (
    <PageContext.Provider value={{ addPage }}>{children}</PageContext.Provider>
  );
}
