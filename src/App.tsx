import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import SVG from './components/SVG';
import Mode from './components/Mode';

const App = () => {
  return (
    <div>
      <SVG />
      <Mode />
    </div>
  );
};

export default App;
