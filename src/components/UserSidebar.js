import { LINKS } from '../constants/links';
import { Link } from 'react-router-dom';

import Icon from '../components/Icon';

export default function UserSidebar() {
  return (
    <aside>
      <section>
        <h2 className="text-slate-600 font-medium text-lg tracking-wider mb-4">
          Menu
        </h2>
        <nav>
          <ul>
            {LINKS.map((link, idx) => (
              <li className="mb-4" key={idx}>
                <Link
                  to={link.path}
                  className="flex flex-row mb-3 gap-4 items-center">
                  <Icon className="h-5 w-5" type={link.icon} />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </aside>
  );
}
