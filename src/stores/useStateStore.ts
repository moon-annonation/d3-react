import create from 'zustand';
import { createTrackedSelector } from 'react-tracked';

type Shape = 'BB' | 'Polygon' | 'Polyline';

interface State {
  isDrawing: boolean;
  shape: Shape;
}

interface Action {
  setIsDrawing: (isDrawing: boolean) => void;
  setShape: (shape: Shape) => void;
}

const store = create<State & Action>((set) => ({
  isDrawing: false,
  shape: 'BB',
  setIsDrawing: (isDrawing: boolean) => set(() => ({ isDrawing })),
  setShape: (shape: Shape) => set(() => ({ shape })),
}));

export const useStateStore = createTrackedSelector(store);
