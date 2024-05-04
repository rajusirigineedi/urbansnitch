import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";

const ResponsiveFooter = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  return isDesktopOrLaptop ? <Footer /> : null;
};

export default ResponsiveFooter;
