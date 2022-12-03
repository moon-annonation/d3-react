import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import SVG from './components/SVG';

const App = () => {
  const x = useRef(50);
  const y = useRef(50);

  useEffect(() => {
    d3.select('#myRect')
      .raise()
      .call(
        d3
          .drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended),
      );

    function dragstarted(event) {
      d3.select(this).raise().classed('active', true);
    }

    function dragged(event) {
      x.current += event.dx;
      y.current += event.dy;

      d3.select(this).attr('x', x.current).attr('y', y.current);
    }

    function dragended(event) {
      d3.select(this).classed('active', false);
    }
  }, []);

  return (
    <div>
      <SVG>
        <g>
          <rect
            id='myRect'
            x={x.current}
            y={y.current}
            width={100}
            height={100}
            fill='red'
          />
        </g>
      </SVG>
    </div>
  );
};

export default App;
