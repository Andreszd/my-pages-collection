import { useState } from 'react';

import defaultIcon from '../assets/img/logo.jpg';
import { ReactComponent as ArrowDownIcon } from '../assets/icons/arrow-down.svg';

const links = ['Settings', 'Sign Out'];

export default function UserSettings() {
  const [isShowing, setShow] = useState(false);

  const handleDropDown = () => setShow(!isShowing);

  return (
    <div className="relative py-2">
      <div
        onClick={handleDropDown}
        className="user-settings flex flex-row items-center gap-3 hover:cursor-pointer">
        <figure className="overflow-hidden rounded-full">
          <img src={defaultIcon} className="h-8 w-8" />
        </figure>
        <span>Andres</span>
        <ArrowDownIcon className="h-2 w-2" />
      </div>
      {isShowing && (
        <ul className="absolute right-0 bottom-0 w-40 py-3 border-solid border-gray-300 shadow-lg border translate-y-full rounded">
          {links.map((link, idx) => (
            <li
              className="mb-2 py-2 mx-2 text-gray-700 hover:bg-blue-100 hover:cursor-pointer hover:text-black  text-sm"
              key={idx}>
              <a href="#" className="px-1">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
