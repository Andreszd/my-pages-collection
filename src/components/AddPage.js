import Icon from './Icon';
import { isValidUrl } from '../helpers/isValidUrl';

import usePagesProvider from '../hooks/usePagesProvider';

export default function AddPage() {
  const { addPage } = usePagesProvider();

  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter' && isValidUrl(evt.target.value)) {
      addPage(evt.target.value);
      evt.target.value = '';
    }
  };

  const handleClick = (evt) => {};

  return (
    <div className="w-full px-4">
      <div className="relative mx-auto block rounded-lg border border-solid border-slate-200 w-3/5 shadow-md overflow-hidden">
        <input
          type="text"
          className="w-full pr-12 pl-6 py-3 placeholder:text-slate-500 placeholder:font-medium focus:outline-none"
          placeholder="Save Page URL https://.."
          onKeyDown={handleKeyDown}
        />
        <Icon
          onClick={handleClick}
          type="clip-board"
          className="absolute right-4 top-0 w-5 h-5 top-0 bottom-0 my-auto hover:cursor-pointer hover:stroke-blue-500"
        />
      </div>
    </div>
  );
}
