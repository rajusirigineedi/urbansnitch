import React from "react";
import { footerBoxDataArray } from "../(utils)/constants";
import { FooterBoxData } from "../(interfaces)/footerboxdata";
import FooterBox from "./FooterBox";
import FooterBoxMobile from "./FooterBoxMobile";
import { FooterBoxDataMobile } from "../(interfaces)/footerboxmobiledata";
import { MapPin, Mail } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const MobileFooter = () => {
  const date: number = new Date().getFullYear();
  return (
    <div className="font-euclid">
      <div className="w-full bg-slate-400/10 shadow-sm border-gray-300 min-h-44 flex flex-col p-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-serif font-extrabold text-center text-md text-gray-700">
            Get on the list
          </p>
          <p className="text-[14px] text-justify mt-2">
            Perks include 10% off your first online order. Be the first to know
            about new collections, store launches, sales, and much more!
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            className="h-10 outline-none p-2 text-xs w-3/4"
            placeholder="Enter your email address here..."
          />
        </div>
        <div className="flex justify-center mt-2">
          <button className="bg-[#1F3C56] text-white p-2 text-sm h-10 w-3/4">
            SIGN ME UP
          </button>
        </div>
      </div>
      <div className="mt-2 flex gap-2">
        {footerBoxDataArray.map((item: FooterBoxDataMobile) => (
          <FooterBoxMobile
            data={{
              iconUrl: item.iconUrl,
              heading: item.heading,
            }}
            key={item.heading}
          />
        ))}
      </div>
      <div className="bg-slate-700/10 min-h-60 flex flex-col mt-2">
        {/* child 1 */}
        <div className="w-full  flex flex-col justify-center items-start p-10 gap-4">
          <div className="flex gap-2">
            <MapPin size={16} />
            <p className="font-bold text-xs cursor-pointer">
              FIND A STORE NEAR YOU
            </p>
          </div>
          <div className="flex gap-2">
            <Mail size={16} />
            <p className="text-xs text-gray-500">care@hermanhood.com</p>
          </div>
          <div className="flex gap-2">
            <FaWhatsapp size={16} />
            <p className="text-xs text-gray-500">
              +91 8588000150 | +91 8588000151
            </p>
          </div>
        </div>
        {/* hr line */}
        <div className="flex justify-center items-center">
          <hr className="border-b-gray-300 border w-3/4" />
        </div>
        <div className="flex justify-between items-center p-8 gap-3">
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="font-bold text-sm cursor-pointer">About us</p>
            <p className="text-gray-500 cursor-pointer text-sm">Our story</p>
            <Link href={"/contact-us"}>
              <p className="text-gray-500 cursor-pointer text-sm">Contact us</p>
            </Link>
            <div className="flex gap-4 justify-center items-center mt-4">
              <FaLinkedin size={28} className="text-gray-500 cursor-pointer" />
              <a href="https://www.instagram.com/hermanhood.in" target="blank">
                <FaInstagram
                  size={28}
                  className="text-gray-500 cursor-pointer"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="font-bold cursor-pointer text-sm">Quick links</p>
            <p className="text-gray-500 cursor-pointer text-sm">
              Track your order
            </p>
            <p className="text-gray-500 cursor-pointer text-sm">
              Shipping & Returns
            </p>
            <p className="text-gray-500 cursor-pointer text-sm">
              Privacy policy
            </p>
            <p className="text-gray-500 cursor-pointer text-sm">
              Terms & Conditions
            </p>
          </div>
        </div>
        {/* hr line */}
        <div className="flex justify-center items-center">
          <hr className="border-b-gray-300 border w-3/4" />
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center mt-2 p-4">
          <p className="text-md font-semibold cursor-pointer">HERMANHOOD</p>
          <p className="text-xs text-gray-500 text-wrap w-2/4 text-center">
            Hermanhood shopping Pvt.Ltd.
          </p>
          <p className="text-xs text-gray-500 text-wrap w-2/4 text-center">
            All Rights Reserved &copy; {date}
          </p>
          <p className="text-xs text-gray-500 text-wrap w-2/4 text-center mt-2">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
