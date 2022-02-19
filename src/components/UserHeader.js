import { useLocation } from 'react-router-dom';

import PrincipalSearch from './PrincipalSearch';
import UserNavbar from './UserNavbar';
import UserSettings from './UserSettings';

import { ReactComponent as Logo } from '../assets/icons/logo-bookmark.svg';

export default function UserHeader() {
  let { pathname } = useLocation();

  return (
    <header className="flex flex-row col-span-2 row-span-1 py-4 items-center justify-between ">
      <Logo />
      {pathname !== '/account' && <PrincipalSearch />}
      <UserNavbar />
      <UserSettings />
    </header>
  );
}
