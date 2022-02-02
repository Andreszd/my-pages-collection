import CustomLink from './CustomLink';
import { LINKS } from '../constants/links';

export default function UserNavbar() {
  return (
    <nav>
      <ul className="flex flex-row ">
        {LINKS.map((link, idx) => (
          <li className="px-5 " key={idx}>
            <CustomLink 
            className="font-normal hover:text-blue-700"
            to={link.path}  >{link.name}</CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
