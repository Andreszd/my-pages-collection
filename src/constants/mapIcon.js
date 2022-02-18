import { ReactComponent as List } from '../assets/icons/list.svg';
import { ReactComponent as Favorities } from '../assets/icons/fav.svg';
import { ReactComponent as Groups } from '../assets/icons/folders.svg';
import { ReactComponent as ClipBoard } from '../assets/icons/clipboard.svg';
import { ReactComponent as Pinned } from '../assets/icons/pinned.svg';
import { ReactComponent as Trash } from '../assets/icons/trash.svg';
import { ReactComponent as Check } from '../assets/icons/check.svg';

export const libIcons = {
  list: List,
  favorite: Favorities,
  group: Groups,
  'clip-board': ClipBoard,
  pinned: Pinned,
  check: Check,
  trash: Trash,
};

export const mapIcon = (type) => libIcons[type];
