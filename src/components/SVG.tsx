import type { FC, PointerEventHandler } from 'react';
import React, { useState } from 'react';
import styled from 'styled-components';
import Drawing from './Drawing';
import Objects from './Objects';
import { useStateStore, useObjectStore } from '../stores';

interface SVGCompProps {
  children?: React.ReactNode;
}

const SVG = styled.svg`
  width: 500px;
  height: 500px;
  border: 1px solid black;
`;

const SVGComp: FC<SVGCompProps> = ({ children }) => {
  const { mode, shape, isDrawing, setIsDrawing } = useStateStore();
  const { objects, addObject } = useObjectStore();
  const [points, setPoints] = useState<number[]>([]);

  const handlePointerDown: PointerEventHandler<SVGElement> = (event) => {
    console.log(event.clientX, event.clientY);
    if (mode === 'Draw') {
      if (!isDrawing) {
        setIsDrawing(true);
        setPoints([event.clientX, event.clientY, event.clientX, event.clientY]);
      } else {
        setIsDrawing(false);
        addObject({ shape, points });
        setPoints([]);
      }
    }
  };

  const handlePointerMove: PointerEventHandler<SVGElement> = (event) => {
    if (mode === 'Draw') {
      if (isDrawing) {
        setPoints([
          ...points.slice(0, points.length - 2),
          event.clientX,
          event.clientY,
        ]);
      }
    }
  };

  return (
    <SVG
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    >
      <Objects objects={objects} />
      <Drawing points={points} setPoints={setPoints} />
    </SVG>
  );
};

export default SVGComp;
