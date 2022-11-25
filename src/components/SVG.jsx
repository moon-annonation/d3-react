import styled from 'styled-components';

const SVG = styled.svg`
  width: 500px;
  height: 500px;
`;

const SVGComp = ({ children }) => {
  return (
    <SVG viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
      {children}
    </SVG>
  );
};

export default SVGComp;
