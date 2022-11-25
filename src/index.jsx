import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const Greet = () => <h1>Hello, world!</h1>;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Greet />);
