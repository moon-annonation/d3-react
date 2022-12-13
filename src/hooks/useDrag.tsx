import * as d3 from 'd3';
import type { FC } from 'react';
import { useEffect } from 'react';
import { useStateStore } from '../stores';
import type { Shape } from '../stores/useStateStore';

interface UseDragProps {
  shape: Shape;
  /* css selector */
  id: string;
}

const dragBB = (event: any, selector: string) => {
  const boundingBox = d3.select(selector);

  const x = Number(boundingBox.attr('x'));
  const y = Number(boundingBox.attr('y'));

  const newX = x + event.dx;
  const newY = y + event.dy;

  boundingBox.attr('x', newX).attr('y', newY);
};

const useDrag: FC<UseDragProps> = ({ shape, id }) => {
  const { mode } = useStateStore();

  useEffect(() => {
    if (id && mode === 'Select') {
      const selector = `#${id}`;

      const dragstarted = () => {
        d3.select(selector).raise().classed('active', true);
      };

      const dragged = (event: any) => {
        switch (shape) {
          case 'BB':
            return dragBB(event, selector);
          default:
            return;
        }
      };

      const dragended = () => {
        d3.select(selector).classed('active', false);
      };

      d3.select(selector).raise().call(
        // @ts-expect-error
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      );

      return () => {
        d3.select(selector).on('.drag', null);
      };
    }
  }, [id, mode]);

  return null;
};

export default useDrag;
export { useDrag };
