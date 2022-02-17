import { useState } from 'react';

import Tooltip from './Tooltip';
import { mapIcon } from '../constants/mapIcon';

export default function Icon({
  type,
  className,
  onClick,
  hasTooltip,
  textTooltip,
}) {
  const [isFocus, setFocus] = useState(false);

  const Svg = mapIcon(type);

  if (hasTooltip) {
    return (
      <div className="relative text-center pb-1">
        <Svg
          className={className}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          onClick={onClick}
        />
        {isFocus && <Tooltip text={textTooltip} />}
      </div>
    );
  }
  return <Svg className={className} onClick={onClick} />;
}
