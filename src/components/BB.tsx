import { FC } from 'react';

interface BBProps {
  points: number[];
}

const BB: FC<BBProps> = ({ points }) => {
  if (points.length < 4) {
    return null;
  }

  const [x1, y1, x2, y2] = points;

  const top = Math.min(y1, y2);
  const bottom = Math.max(y1, y2);
  const left = Math.min(x1, x2);
  const right = Math.max(x1, x2);

  return (
    <rect
      x={left}
      y={top}
      width={right - left}
      height={bottom - top}
      fill={'none'}
      stroke={'red'}
      strokeWidth={'1'}
    />
  );
};

export default BB;
