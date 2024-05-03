"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./DesktopHeader";
import MobileSidebar from "./MobileSidebar";

const ResponsiveHeader = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  return isDesktopOrLaptop ? <DesktopHeader /> : <MobileSidebar />;
};

export default ResponsiveHeader;
