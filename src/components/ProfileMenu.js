import { Link } from 'react-router-dom';

export default function ProfileMenu({ switchDropDown }) {
  return (
    <ul
      className="absolute right-0 bottom-0 w-40 py-3 border-solid border-gray-300 shadow-lg border translate-y-full rounded"
      onMouseLeave={() => switchDropDown()}>
      <li className="">
        <Link
          to="account"
          className="block mb-2 py-2 mx-2 px-2 text-gray-700 hover:bg-blue-100 rounded hover:text-blue-700 text-sm">
          Account
        </Link>
      </li>
      <li className="mb-2 py-2 mx-2 text-gray-700 hover:bg-blue-100 hover:cursor-pointer hover:text-blue-700  text-sm">
        Log out
      </li>
    </ul>
  );
}
