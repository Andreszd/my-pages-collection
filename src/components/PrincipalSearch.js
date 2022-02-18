import Icon from './Icon';

export default function PrincipalSearch() {
  return (
    <div className="relative  rounded-lg w-80 overflow-hidden shadow">
      <input
        type="text"
        placeholder="Search"
        className="pl-4 pr-10 py-2  rounded w-full focus:outline-none "
      />
      <span className="absolute top-0 right-0 px-3 flex flex-col justify-center h-full">
        <Icon type="search" className="h-4 w-4 text-gray-400" />
      </span>
    </div>
  );
}
