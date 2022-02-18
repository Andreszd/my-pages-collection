import { useState } from 'react';

import { PageContext } from '../context/PageContext';

import { getInfo } from '../services/infoPage';

export default function PageProvider({ children }) {
  const [pages, setPages] = useState([]);

  const addPage = async (page) => {
    const { icon, description, title, domain, image } = await getInfo(page);
    setPages([
      ...pages,
      {
        id: pages.length,
        url: page,
        icon,
        description,
        title,
        domain,
        image,
        checked: false,
        isFav: false,
      },
    ]);
  };

  const filterBy = (attr, value) => {
    if (attr !== 'checked' && attr !== 'isFav') return;
    return pages.filter((page) => page[attr] === value);
  };

  const changeStatus = (id, attr) => {
    if (attr !== 'checked' && attr !== 'isFav') return;

    const updatePages = pages.map((page) =>
      page.id === id ? { ...page, [attr]: !page[attr] } : page
    );

    setPages(updatePages);
  };

  const removePage = (id) => {
    const updatePages = pages.filter((page) => page.id !== id);
    setPages(updatePages);
  };
  return (
    <PageContext.Provider
      value={{ addPage, pages, changeStatus, removePage, filterBy }}>
      {children}
    </PageContext.Provider>
  );
}
