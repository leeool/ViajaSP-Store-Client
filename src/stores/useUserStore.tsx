import { create } from "zustand"

interface Props {
  userData: ICustomer | null
  setUserData: (userData: ICustomer) => void
  userLogout: () => void
}

const useUserStore = create<Props>((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
  userLogout: () => set({ userData: null })
}))

export default useUserStore
