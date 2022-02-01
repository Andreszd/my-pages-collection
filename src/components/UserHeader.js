import PrincipalSearch from './PrincipalSearch';
import UserNavbar from './UserNavbar';
import UserSettings from './UserSettings';

export default function UserHeader() {
  return (
    <header className="flex flex-row py-4 items-center justify-between ">
      <span>here logo xd</span>
      <PrincipalSearch />
      <UserNavbar />
      <UserSettings />
    </header>
  );
}
