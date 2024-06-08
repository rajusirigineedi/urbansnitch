"use client";
import React from "react";
import dynamic from "next/dynamic";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../redux/store";

// THIS IS STACK OVERFLOW HACK.
const ResponsiveHeader = dynamic(() => import("./ResponsiveHeader"), {
  ssr: false,
});

const ResponsiveFooter = dynamic(() => import("./ResponsiveFooter"), {
  ssr: false,
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ResponsiveHeader />
      {children}
      {/* You can add our footer directly now */}
      <ResponsiveFooter />
    </Provider>
  );
};
export default Providers;
