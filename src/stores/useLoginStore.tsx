import { create } from "zustand"

interface Props {
  stage: "checkEmail" | "signIn" | "signUp"
  setStage: (stage: "checkEmail" | "signIn" | "signUp") => void
  email: string
  setEmail: (email: string) => void
}

const useLoginStore = create<Props>((set) => ({
  stage: "checkEmail",
  setStage: (stage) => set({ stage }),
  email: "",
  setEmail: (email) => set({ email })
}))

export default useLoginStore
