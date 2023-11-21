import React from "react";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return <>{children}</>;
};

export default ScrollToTop;
