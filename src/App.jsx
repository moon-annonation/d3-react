import SVG from './components/SVG';

const App = () => {
  return (
    <div>
      <SVG>
        <g>
          <rect x={50} y={50} width={100} height={100} fill='red' />
        </g>
      </SVG>
    </div>
  );
};

export default App;
