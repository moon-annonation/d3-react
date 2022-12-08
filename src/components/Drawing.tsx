import { FC, Dispatch, SetStateAction } from 'react';
import { aperture } from 'ramda';
import { useStateStore } from '../stores';
import BB from './BB';
import { chunk } from '../utils';

interface DrawingProps {
  points: number[];
  setPoints: Dispatch<SetStateAction<number[]>>;
}

const Drawing: FC<DrawingProps> = ({ points, setPoints }) => {
  const { shape, isDrawing } = useStateStore();

  if (!isDrawing) {
    return null;
  }

  const renderComponentByShape = () => {
    switch (shape) {
      case 'BB':
        return <BB points={points} />;
      default:
        return null;
    }
  };

  return (
    <g>
      {renderComponentByShape()}
      {chunk(points, 2).map(([x, y], i) => (
        <circle
          key={`${x}-${y}-${i}`}
          cx={x}
          cy={y}
          r={4}
          fill="#fff"
          stroke="red"
        />
      ))}
    </g>
  );
};

export default Drawing;
