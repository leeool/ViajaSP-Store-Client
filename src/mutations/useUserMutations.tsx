import axiosInstance from "@/API/axiosInstance"
import useUserStore from "@/stores/useUserStore"
import React from "react"
import { useMutation } from "react-query"

export const useMeMutation = () => {
  const setUserData = useUserStore((state) => state.setUserData)

  const mutation = useMutation<ICustomer>({
    mutationKey: ["me"],
    mutationFn: async () => {
      const token = localStorage.getItem("token")

      if (!token) return Promise.reject("No token found")

      return axiosInstance
        .get("/auth", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => res.data)
    },
    onSuccess: (data) => {
      setUserData(data)
    }
  })

  return mutation
}

interface SignInProps {
  email: string
  password: string
}

export const useSignInMutation = () => {
  const mutation = useMutation<{ token: string }, unknown, SignInProps>({
    mutationKey: ["signIn"],
    mutationFn: async (data: SignInProps) => {
      return axiosInstance.post("/auth", data).then((res) => res.data)
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token)
    }
  })

  return mutation
}

interface SendEmailProps {
  email: string
}

export const useSendEmailMutation = () => {
  const userData = useUserStore((state) => state.userData)

  const mutate = useMutation({
    mutationKey: ["sendEmail"],
    mutationFn: async (data: SendEmailProps) => {
      if (userData && userData.verified)
        return Promise.reject("User already verified")

      return axiosInstance.post("/auth/verify", data).then((res) => res.data)
    }
  })

  return mutate
}

export const useVerifyEmail = () => {
  const mutation = useMutation({
    mutationKey: ["verifyEmail"],
    mutationFn: async (data: { token: string; id: string }) => {
      return axiosInstance
        .get(`/auth/verify?token=${data.token}&id=${data.id}`)
        .then((res) => res.data)
    }
  })

  return mutation
}
