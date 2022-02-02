import { mapIcon } from '../constants/mapIcon';

export default function Icon({ type, className }) {
  const Svg = mapIcon(type);

  return (
    <>
      <Svg className={className} />
    </>
  );
}
