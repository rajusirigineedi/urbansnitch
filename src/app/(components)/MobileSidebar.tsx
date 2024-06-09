"use client";
import { Heart, Menu, Search, UserRound } from "lucide-react";
import React from "react";
import Header from "./Header";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/sidebarToggleSlice";

const MobileSidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const sidebarToggle = useSelector(
    (store: any) => store.sidebar.sidebarToggle
  );
  const togglesidebar = () => {
    dispatch(toggleSidebar(!sidebarToggle));
  };
  console.log(sidebarToggle);
  return (
    <div className="lg:hidden md:hidden w-full h-16 bg-slate-100/10 flex justify-between items-center p-2 m-2 shadow-sm font-euclid">
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <Menu onClick={togglesidebar} />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0">
          <Header />
        </SheetContent>
      </Sheet>
      <Link href={"/"}>
        <p className="font-bold">HERMANHOOD</p>
      </Link>
      <div className="flex gap-6 p-4 justify-center items-center">
        <UserRound />
        <Search />
        <Heart size={24} onClick={() => router.push("/wishlist")} />
      </div>
    </div>
  );
};

export default MobileSidebar;
