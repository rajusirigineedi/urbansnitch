import { Instagram, Mail, MapPin } from "lucide-react";
import { headers } from "next/headers";
import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FooterBoxData } from "../(interfaces)/footerboxdata";
import FooterBox from "../(components)/FooterBox";
import { footerBoxDataArray } from "../(utils)/constants";
import Link from "next/link";

const Footer = () => {
  const date: number = new Date().getFullYear();
  return (
    <div className="font-euclid">
      <div className="w-full bg-slate-400/10 shadow-sm border-gray-300 min-h-56 flex flex-col p-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-serif font-extrabold text-center text-2xl text-gray-700">
            Get on the list
          </p>
          <p className="text-[14px] text-justify mt-2 w-1/3">
            Perks include 10% off your first online order. Be the first to know
            about new collections, store launches, sales, and much more!
          </p>
        </div>
        <div className="flex items-center justify-evenly">
          <div className="flex p-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0270/5129/4854/files/Elements_3-05_2x_6d901bc1-2142-43bc-8310-bb686d43c745.png?v=1686549910"
              alt="tree image"
              className="h-32"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0270/5129/4854/files/Elements_3-05_2x_6d901bc1-2142-43bc-8310-bb686d43c745.png?v=1686549910"
              alt="tree image"
              className="h-20 mt-12"
            />
          </div>
          <div className="flex mt-14">
            <input
              type="text"
              className="w-96 h-10 outline-none p-2 text-sm"
              placeholder="Enter your email address here"
            />
            <div className="flex flex-col">
              <img
                src="https://cdn.shopify.com/s/files/1/0270/5129/4854/files/Elements_3-08_2x_f4355105-f310-4572-8bef-8bd007434539.png?v=1686550817"
                alt="monkey image"
                className="h-20 w-16 -mt-20 ml-6"
              />
              <button className="bg-[#1F3C56] text-white p-2 text-sm">
                SIGN ME UP
              </button>
            </div>
          </div>
          <div className="flex p-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0270/5129/4854/files/Elements_3-05_2x_6d901bc1-2142-43bc-8310-bb686d43c745.png?v=1686549910"
              alt="tree image"
              className="h-32"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0270/5129/4854/files/Elements_3-05_2x_6d901bc1-2142-43bc-8310-bb686d43c745.png?v=1686549910"
              alt="tree image"
              className="h-20 mt-12"
            />
          </div>
        </div>
      </div>
      <div className="mt-2 flex gap-2">
        {footerBoxDataArray.map((item: FooterBoxData) => (
          <FooterBox
            data={{
              iconUrl: item.iconUrl,
              heading: item.heading,
              description: item.description,
            }}
            key={item.heading}
          />
        ))}
      </div>
      <div className="bg-slate-500/10 min-h-60 mt-2 flex justify-center items-center">
        <div className="w-1/4  border-r border-gray-400 flex flex-col gap-8 justify-center items-start ml-10">
          <div className="flex gap-2">
            <MapPin />
            <p className="font-bold text-md cursor-pointer">
              FIND A STORE NEAR YOU
            </p>
          </div>
          <div className="flex gap-2">
            <Mail />
            <p className="text-md text-gray-500">care@hermanhood.com</p>
          </div>
          <div className="flex gap-2">
            <FaWhatsapp size={24} />
            <p className="text-md text-gray-500">
              +91 8588000150 | +91 8588000151
            </p>
          </div>
        </div>
        <div className="w-1/4 border-r border-gray-400 flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="font-bold cursor-pointer">About us</p>
            <p className="text-gray-500 cursor-pointer">Our story</p>
            <Link href={"/contact-us"}>
              <p className="text-gray-500 cursor-pointer">Contact us</p>
            </Link>
            <div className="flex gap-4 justify-center items-center mt-4">
              <FaLinkedin size={28} className="text-gray-500 cursor-pointer" />
              <FaInstagram size={28} className="text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-1/4 border-r border-gray-400 flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="font-bold cursor-pointer">Quick links</p>
            <p className="text-gray-500 cursor-pointer">Track your order</p>
            <p className="text-gray-500 cursor-pointer">Shipping & Returns</p>
            <p className="text-gray-500 cursor-pointer">Privacy policy</p>
            <p className="text-gray-500 cursor-pointer">Terms & Conditions</p>
          </div>
        </div>
        <div className="w-1/4 border-r border-gray-400 flex flex-col gap-2 justify-center items-center">
          <div className="flex flex-col justify-between items-start gap-2">
            <p className="font-bold text-xl cursor-pointer">HERMANHOOD</p>
            <p className="text-xs text-muted-foreground text-gray-500 text-wrap w-3/4">
              Hermanhood shopping Pvt.Ltd. All Rights Reserved &copy; {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
