import create from 'zustand';
import { createTrackedSelector } from 'react-tracked';

export interface Object {
  shape: 'BB' | 'Polygon' | 'Polyline';
  points: number[];
}

interface State {
  objects: Object[];
}

interface Action {
  addObject: (object: Object) => void;
}

const store = create<State & Action>((set) => ({
  objects: [],
  addObject: (object: Object) =>
    set((state) => ({ objects: [...state.objects, object] })),
}));

export const useObjectStore = createTrackedSelector(store);
