import { FC, useState } from 'react';
import styled from 'styled-components';

import { useStateStore } from '../stores';

const Container = styled.div`
  display: flex;
`;

const Mode: FC = () => {
  const { mode, setMode } = useStateStore();
  const [selectedMode, setSelectedMode] = useState(mode);

  const handleChangeMode = (selected: typeof mode) => () => {
    setMode(selected);
    setSelectedMode(selected);
  };

  return (
    <Container>
      <fieldset>
        <legend>Select a mode</legend>

        <div>
          <input
            type="radio"
            id="select"
            name="mode"
            value="select"
            checked={selectedMode === 'Select'}
            onChange={handleChangeMode('Select')}
          />
          <label htmlFor="select">Select & Move</label>
        </div>

        <div>
          <input
            type="radio"
            id="bb"
            name="mode"
            value="bb"
            checked={selectedMode === 'Draw'}
            onChange={handleChangeMode('Draw')}
          />
          <label htmlFor="bb">Bounding box</label>
        </div>
      </fieldset>
    </Container>
  );
};

export default Mode;
