import { Link } from 'react-router-dom';
import { LINKS } from '../constants/links';

export default function UserNavbar() {
  return (
    <nav>
      <ul className="flex flex-row font-medium">
        {LINKS.map((link, idx) => (
          <li className="px-5 " key={idx}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
