import { ReactComponent as List } from '../assets/icons/list.svg';
import { ReactComponent as Favorities } from '../assets/icons/fav.svg';
import { ReactComponent as Groups } from '../assets/icons/folders.svg';

export const libIcons = {
  list: List,
  favorities: Favorities,
  group: Groups,
};

export const mapIcon = (type) => libIcons[type];
