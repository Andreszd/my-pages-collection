export default function UserNavbar() {
  return (
    <nav>
      <ul className="flex flex-row font-medium">
        <li className="px-5 hover:cursor-pointer">
          <a>My list</a>
        </li>
        <li className="px-5 hover:cursor-pointer">
          <a>Favorities</a>
        </li>
        <li className="px-5 hover:cursor-pointer">
          <a>Groups</a>
        </li>
      </ul>
    </nav>
  );
}
