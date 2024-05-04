import React from "react";
import dynamic from "next/dynamic";
import Footer from "./Footer";
// THIS IS STACK OVERFLOW HACK.
const ResponsiveHeader = dynamic(() => import("./ResponsiveHeader"), {
  ssr: false,
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ResponsiveHeader />
      {children}
      {/* You can add our footer directly now */}
      <Footer />
    </div>
  );
};
export default Providers;
