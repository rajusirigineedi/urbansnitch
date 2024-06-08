import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useMediaCustom = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  return isDesktopOrLaptop;
};

export default useMediaCustom;
