import axiosInstance from "@/API/axiosInstance"
import { QueryKey, useQuery } from "react-query"
import { useParams } from "react-router-dom"

export const useShowTripQuery = () => {
  const { id } = useParams<{ id: string }>()

  const mutation = useQuery<ITripPackage, unknown>({
    queryKey: ["showTrip", id],
    queryFn: async () => {
      return axiosInstance.get(`/trip-package/${id}`).then((res) => res.data)
    },
    enabled: !!id,
    onSuccess: (data) => {
      console.log(data)
    }
  })

  return mutation
}

export const useTripsQuery = () => {
  const mutation = useQuery<ITripPackage[], unknown>({
    queryKey: ["trips"],
    queryFn: async () => {
      return axiosInstance.get("/trip-package").then((res) => res.data)
    },
    onSuccess: (data) => {
      console.log(data)
    }
  })

  return mutation
}
