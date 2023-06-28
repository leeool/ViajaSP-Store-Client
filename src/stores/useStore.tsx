import { create } from "zustand"

interface IStore {
  loading: boolean
  setLoading: (loading: boolean) => void
}

const useStore = create<IStore>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading })
}))

export default useStore
