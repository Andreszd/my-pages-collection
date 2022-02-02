import Icon from './Icon';

export default function AddPage() {
  return (
    <div className="w-full p-4">
      <div className="relative mx-auto block rounded-lg border border-solid border-slate-200 w-3/5 shadow-md overflow-hidden">
        <input
          type="text"
          className="w-full px-6 py-3 placeholder:text-slate-500 placeholder:font-medium focus:outline-none"
          placeholder="Add Page..."
        />
        <Icon
          type="clip-board"
          className="absolute right-4 top-0 w-5 h-5 top-0 bottom-0 my-auto hover:cursor-pointer hover:stroke-blue-500"
        />
      </div>
    </div>
  );
}
