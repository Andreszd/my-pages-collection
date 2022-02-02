import { ReactComponent as List } from '../assets/icons/list.svg';
import { ReactComponent as Favorities } from '../assets/icons/fav.svg';
import { ReactComponent as Groups } from '../assets/icons/folders.svg';
import { ReactComponent as ClipBoard } from '../assets/icons/clipboard.svg';

export const libIcons = {
  list: List,
  favorities: Favorities,
  group: Groups,
  'clip-board': ClipBoard,
};

export const mapIcon = (type) => libIcons[type];
