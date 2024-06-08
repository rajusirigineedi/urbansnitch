"use client";
import dynamic from "next/dynamic";

const DesktopComponent = dynamic(() => import("./(components)/DesktopComp"), {
  ssr: false,
});

export default function Home() {
  return <DesktopComponent />;
}
