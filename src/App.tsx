import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import SVG from './components/SVG';
import Mode from './components/Mode';

const App = () => {
  const selector = '#myRect';
  const x = useRef(50);
  const y = useRef(50);

  useEffect(() => {
    const dragstarted = () => {
      d3.select(selector).raise().classed('active', true);
    };

    const dragged = (event: any) => {
      x.current += event.dx;
      y.current += event.dy;
      console.log(d3.select(selector));

      d3.select(selector).attr('x', x.current).attr('y', y.current);
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
  }, []);

  return (
    <div>
      <SVG />
      <Mode />
    </div>
  );
};

export default App;
