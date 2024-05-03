import React from "react";
import ProductCard from "../(components)/ProductCard";
import Header from "../(components)/Header";
import MobileSidebar from "../(components)/MobileSidebar";
import DesktopHeader from "../(components)/DesktopHeader";

const page = () => {
  return (
    <div>
      <MobileSidebar />
      <DesktopHeader />
    </div>
  );
};

export default page;
