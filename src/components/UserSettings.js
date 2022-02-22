import { useState } from 'react';

import { ReactComponent as ArrowDownIcon } from '../assets/icons/arrow-down.svg';

import useAuth from '../hooks/useAuth';

import ProfileMenu from './ProfileMenu';
import defaultIcon from '../assets/img/logo.jpg';

export default function UserSettings() {
  const [isShowing, setShow] = useState(false);
  const { user } = useAuth();

  const handleDropDown = () => setShow(!isShowing);

  const getUserName = () => user?.fullName.split(' ')[0];

  return (
    <div className="relative py-2">
      <div
        onClick={handleDropDown}
        className="user-settings flex flex-row items-center gap-3 hover:cursor-pointer">
        <figure className="overflow-hidden rounded-full">
          <img src={defaultIcon} className="h-8 w-8" />
        </figure>
        <span className="hidden md:block">{getUserName()}</span>
        <ArrowDownIcon className="h-2 w-2" />
      </div>
      {isShowing && <ProfileMenu switchDropDown={handleDropDown} />}
    </div>
  );
}
