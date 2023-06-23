import React from "react"
import ReactLoading from "react-loading"

const SpinnerLoading = () => {
  return (
    <ReactLoading
      type="spin"
      color="#F8BC00"
      height={50}
      width={50}
      className="loading"
    />
  )
}

export default SpinnerLoading
