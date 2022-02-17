import Icon from './Icon';

export default function ActionsCard() {
  return (
    <div className="flex text-slate-700  px-2 gap-3 pb-2">
      <Icon
        type="check"
        className="h-6 w-6 hover:fill-green-400 hover:cursor-pointer"
      />
      <Icon
        type="favorities"
        className="h-6 w-6 hover:fill-yellow-400 hover:cursor-pointer"
      />
      <Icon
        type="trash"
        className="h-6 w-6 hover:fill-red-400 hover:cursor-pointer "
      />
    </div>
  );
}
