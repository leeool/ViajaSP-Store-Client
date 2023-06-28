import React from "react"
import ReactLoading from "react-loading"

const SpinnerLoading = () => {
  return (
    <ReactLoading
      type="spin"
      color="#F8BC00"
      height={"100%"}
      width={"100%"}
      className="loading"
    />
  )
}

export default SpinnerLoading
