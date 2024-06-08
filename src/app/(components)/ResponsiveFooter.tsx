"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import useMediaCustom from "@/hooks/useMediaCustom";

const ResponsiveFooter = () => {
  const isDesktopOrLaptop = useMediaCustom();

  return isDesktopOrLaptop ? <Footer /> : <MobileFooter />;
};

export default ResponsiveFooter;
