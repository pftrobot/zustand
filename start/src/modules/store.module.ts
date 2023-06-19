import { create } from "zustand";

interface State1 {
    state: number
    setState: (newState:number) => void
}

// 발행
export const projectName = create<State1>((set) => ({
    state: 0,
    setState: (newState) => set({state: newState})
}))