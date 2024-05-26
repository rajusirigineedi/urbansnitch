"use client";
import { Menu, Search, User, UserRound } from "lucide-react";
import React from "react";
import Header from "./Header";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const MobileSidebar = () => {
  return (
    <div className="lg:hidden md:hidden w-full h-16 bg-slate-100/10 flex justify-between items-center p-2 m-2 shadow-sm font-euclid">
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0">
          <Header />
        </SheetContent>
      </Sheet>
      <p className="font-bold">HERMANHOOD</p>
      <div className="flex gap-6 p-4 justify-center items-center">
        <UserRound />
        <Search />
        <Image
          width={5}
          height={5}
          src="/shopping-bag.png"
          alt="shopping-bag"
          className="w-5 h-5 sm:w-3 sm:h-3 md:h-5 md:w-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileSidebar;
