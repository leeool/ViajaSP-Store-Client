import React from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const loc = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [loc.pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
