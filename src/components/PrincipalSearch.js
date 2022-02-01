import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

export default function PrincipalSearch() {
  return (
    <div className="relative bg-slate-200 rounded-lg w-80 overflow-hidden focus:outiline shadow-md">
      <input
        type="text"
        placeholder="search"
        className="pl-4 pr-10 py-2 bg-slate-200 rounded w-full focus:outline-none "
      />
      <span className="absolute top-0 right-0 px-3 flex flex-col justify-center h-full">
        <SearchIcon className="h-4 w-4 text-gray-400 " />
      </span>
    </div>
  );
}
