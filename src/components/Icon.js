import { mapIcon } from '../constants/mapIcon';

export default function Icon({ type, className, onClick }) {
  const Svg = mapIcon(type);

  return (
    <>
      <Svg className={className} onClick={onClick} />
    </>
  );
}
