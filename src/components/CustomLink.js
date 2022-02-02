import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function CustomLink({ children, to, className, isActive, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved?.pathname, end: true });

  return (
    <Link
      {...props}
      to={to}
      className={`${className} ${match ? `text-blue-700 font-bold ${isActive}` : ''}`}>
      {children}
    </Link>
  );
}
