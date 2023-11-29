import { create } from "zustand";

export const useAppStore = create((set) => ({
  localMousePos: { x: "", y: "" },
  setLocalMousePos: (data) => set(() => ({ localMousePos: data })),
  selectXY: { x: "", y: "" },
  setSelectXY: (data) => set(() => ({ selectXY: data })),
  absArr: [],
  setAbsArr: (data) => set((state) => ({ absArr: [...state.absArr, data] })),
  setAbsArrAll: (data) => set((state) => ({ absArr: data })),
  showActive: true,
  setShowActive: (data) => set((state) => ({ showActive: data })),
}));