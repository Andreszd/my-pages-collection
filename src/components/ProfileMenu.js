import { Link } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

export default function ProfileMenu({ switchDropDown }) {
  const { logout } = useAuth();
  console.log('render');

  return (
    <ul
      className="absolute bg-white right-0 z-20 bottom-0 w-40 py-3 border-solid border-gray-300 shadow-lg border translate-y-full rounded"
      onMouseLeave={() => switchDropDown()}>
      <li className="">
        <Link
          to="account"
          className="block mb-2 py-2 mx-2 px-2 text-gray-700 hover:bg-blue-100 rounded hover:text-blue-700 text-sm">
          Account
        </Link>
      </li>
      <li
        onClick={() => logout()}
        className="block mb-2 py-2 mx-2 px-2 text-gray-700 hover:bg-blue-100 rounded hover:text-blue-700 text-sm hover:cursor-pointer">
        Log out
      </li>
    </ul>
  );
}
