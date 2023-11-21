import theme from "@style/Theme";
import React from "react";
import ReactLoading from "react-loading";

const SpinnerLoading = () => {
  return (
    <ReactLoading
      type="spin"
      color={theme.bg.primary}
      height={"100%"}
      width={"100%"}
      className="loading"
    />
  );
};

export default SpinnerLoading;
