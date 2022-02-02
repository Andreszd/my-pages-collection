import PrincipalSearch from './PrincipalSearch';
import UserNavbar from './UserNavbar';
import UserSettings from './UserSettings';

import { ReactComponent as Logo } from '../assets/icons/logo-bookmark.svg';

export default function UserHeader() {
  return (
    <header className="flex flex-row col-span-2 row-span-1 py-4 items-center justify-between ">
      <Logo />
      <PrincipalSearch />
      <UserNavbar />
      <UserSettings />
    </header>
  );
}
