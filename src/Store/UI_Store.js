import { create } from "zustand";

const UI_Store = create((set) => ({
    OpenSearchInput: false,
    OpeningSearchInput: () => set((state) => ({ OpenSearchInput: !state.OpenSearchInput })),
    reset: () => set({ OpenSearchInput: false })
})

)

export default UI_Store