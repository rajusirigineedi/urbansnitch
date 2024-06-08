"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./DesktopHeader";
import MobileSidebar from "./MobileSidebar";
import useMediaCustom from "@/hooks/useMediaCustom";

const ResponsiveHeader = () => {
  const isDesktopOrLaptop = useMediaCustom();
  return isDesktopOrLaptop ? <DesktopHeader /> : <MobileSidebar />;
};

export default ResponsiveHeader;
