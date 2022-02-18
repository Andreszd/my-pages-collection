import Icon from './Icon';
import usePagesProvider from '../hooks/usePagesProvider';

const actions = [
  {
    type: 'check',
    style: 'fill-green-400',
  },
  {
    type: 'favorite',
    style: 'fill-yellow-400',
  },
  {
    type: 'trash',
    style: 'fill-red-400',
  },
];

export default function ActionsCard({ pageInfo }) {
  const { changeStatus, removePage } = usePagesProvider();

  const handleClick = (type) => {
    if (type === 'check' || type === 'favorite') {
      let attrToChange = '';

      if (type === 'check') {
        attrToChange = 'checked';
      }
      if (type === 'favorite') {
        attrToChange = 'isFav';
      }
      changeStatus(pageInfo.id, attrToChange);
    }

    if (type === 'trash') {
      //delete page
      removePage(pageInfo.id);
    }
  };

  const setIconColor = (action) =>
    (action.type === 'check' && pageInfo.checked) ||
    (action.type === 'favorite' && pageInfo.isFav)
      ? action.style
      : '';

  return (
    <div className="flex text-slate-700  px-2 gap-3 pb-2">
      {actions.map((action, idx) => (
        <Icon
          onClick={() => handleClick(action.type)}
          key={idx}
          type={action.type}
          className={`h-6 w-6 stroke-slate-500 hover:stroke-slate-700 hover:cursor-pointer 
            ${setIconColor(action)}`}
          hasTooltip={true}
          textTooltip={action.type}
        />
      ))}
    </div>
  );
}
