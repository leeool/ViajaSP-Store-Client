import { create } from "zustand"

interface Props {
  userData: ICustomer | null
  setUserData: (userData: ICustomer) => void
}

const useUserStore = create<Props>((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData })
}))

export default useUserStore
