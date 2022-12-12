import create from 'zustand';
import { createTrackedSelector } from 'react-tracked';

type Shape = 'BB' | 'Polygon' | 'Polyline';
type Mode = 'Select' | 'Draw';

interface State {
  isDrawing: boolean;
  shape: Shape;
  mode: Mode;
}

interface Action {
  setIsDrawing: (isDrawing: boolean) => void;
  setShape: (shape: Shape) => void;
  setMode: (mode: Mode) => void;
}

const store = create<State & Action>((set) => ({
  isDrawing: false,
  shape: 'BB',
  mode: 'Select',
  setIsDrawing: (isDrawing: boolean) => set(() => ({ isDrawing })),
  setShape: (shape: Shape) => set(() => ({ shape })),
  setMode: (mode: Mode) => set(() => ({ mode })),
}));

export const useStateStore = createTrackedSelector(store);
