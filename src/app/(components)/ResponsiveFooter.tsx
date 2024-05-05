"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";

const ResponsiveFooter = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  return isDesktopOrLaptop ? <Footer /> : <MobileFooter />;
};

export default ResponsiveFooter;
