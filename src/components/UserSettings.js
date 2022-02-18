import { useState } from 'react';

import { ReactComponent as ArrowDownIcon } from '../assets/icons/arrow-down.svg';

import ProfileMenu from './ProfileMenu';
import defaultIcon from '../assets/img/logo.jpg';

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
      {isShowing && <ProfileMenu switchDropDown={handleDropDown} />}
    </div>
  );
}
