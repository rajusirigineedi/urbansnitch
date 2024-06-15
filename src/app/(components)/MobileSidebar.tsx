"use client";
import { Heart, Menu, Search, User, UserRound } from "lucide-react";
import React from "react";
import Header from "./Header";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const MobileSidebar = () => {
  const router = useRouter();
  const wishlistItems = useSelector(
    (store: any) => store.wishlist.wishlistArray
  );
  return (
    <div className="lg:hidden md:hidden w-full h-16 bg-slate-100/10 flex justify-between items-center p-2 m-2 shadow-sm font-euclid sticky top-0 z-50 bg-white">
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
      <Link href={"/"}>
        <p className="font-bold">HERMANHOOD</p>
      </Link>
      <div className="flex gap-6 p-4 justify-center items-center">
        {/* <UserRound /> */}
        <Search />
        <div className="flex ">
          <Heart size={24} onClick={() => router.push("/wishlist")} />
          {/* <Badge className="text-xs">{wishlistItems?.length}</Badge> */}
          {wishlistItems?.length > 0 && (
            <p className="mt-2 text-xs text-red-500 font-bold">
              {wishlistItems?.length && <>({wishlistItems?.length})</>}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
