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

  //FIXME tootltip
  return (
    <div className="w-full px-4">
      <div className="relative mx-auto block rounded-lg  shadow border-solid border-slate-200 w-3/5  overflow-hidden z-10">
        <input
          type="text"
          className="w-full pr-12 pl-6 py-3 placeholder:text-slate-400 placeholder:font-medium focus:outline-none"
          placeholder="Save Page URL https://.."
          onKeyDown={handleKeyDown}
        />
        <span className="absolute right-4 top-0 w-5 h-5 top-0 bottom-0 my-auto">
          <Icon
            onClick={handleClick}
            type="clip-board"
            className="w-full h-full hover:cursor-pointer hover:stroke-blue-500"
            hasTooltip={true}
            textTooltip="copy"
          />
        </span>
      </div>
    </div>
  );
}
