import type { Object } from '../stores/useObjectStore';
import { FC } from 'react';
import BB from '../components/BB';

interface ObjectsProps {
  objects: Object[];
}

const Objects: FC<ObjectsProps> = ({ objects }) => {
  const renderComponentByShape = (object: Object, key: number) => {
    switch (object.shape) {
      case 'BB':
        return (
          <BB key={key.toString()} id={`bb-${key}`} points={object.points} />
        );
      default:
        return null;
    }
  };

  return <g>{objects.map((object, i) => renderComponentByShape(object, i))}</g>;
};

export default Objects;
