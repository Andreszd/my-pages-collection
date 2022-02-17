import { useState } from 'react';

import { PageContext } from '../context/PageContext';

import { getInfo } from '../services/infoPage';

export default function PageProvider({ children }) {
  const [pages, setPages] = useState([]);

  const addPage = async (page) => {
    const { icon, description, title, domain, image } = await getInfo(page);
    setPages([
      ...pages,
      { url: page, icon, description, title, domain, image },
    ]);
  };

  return (
    <PageContext.Provider value={{ addPage, pages }}>
      {children}
    </PageContext.Provider>
  );
}
