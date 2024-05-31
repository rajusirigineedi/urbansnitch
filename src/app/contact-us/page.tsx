import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const page = () => {
  return (
    <div className="flex flex-col font-mono mb-4">
      <Image
        src={"/contact-us-hd.png"}
        alt="Contact us image"
        layout="responsive"
        width={400}
        height={200}
      />
      <div className="min-h-96 flex justify-center   mt-0 md:pt-10 ">
        <div className="flex w-[350px] md:w-3/5 bg-gray-400/10  justify-start md:justify-center items-center mt-4 mb-4 p-2 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 p-2 gap-10">
            <div className="flex flex-col gap-2 md:gap-4 ">
              <MdOutlinePhoneCallback className="md:w-6 md:h-6" />

              <h1 className="font-bold text-lg md:text-2xl">
                Call or chat with us on whatsapp
              </h1>
              <p className=" text-xs md:text-sm text-start">
                Mon-Sat 9:30 AM TO 5:30 PM (IST)
              </p>
              <p className=" text-xs md:text-sm text-start">
                + 91 9010778702 <br />+ 91 7036836879
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-4">
              <TfiEmail className="md:w-6 md:h-6" />
              <h1 className="font-bold text-lg md:text-2xl">Write to us </h1>
              <div className="flex flex-col">
                <p className="text-xs md:text-sm text-gray-400">
                  General enquiries
                </p>
                <p className="text-xs md:text-sm">care@hermanhood.com</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs md:text-sm text-gray-400">
                  Corporate/bulk orders
                </p>
                <p className="text-xs md:text-sm">corporate@hermanhood.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-4">
              <IoChatboxOutline className="md:w-6 md:h-6" />
              <h1 className="font-bold text-lg md:text-2xl">Live chat</h1>
              <p className=" text-xs md:text-sm">
                Mon-Sat 9:30 AM TO 5:30 PM (IST)
              </p>
              <p className=" text-xs md:text-sm">
                Talk to us on live chat.
                <br />
                we are here to help
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-50 flex justify-center mt-0 md:pt-5">
        <div className="w-[350px] md:w-3/5 flex flex-col justify-center items-center">
          <p className=" text-md md:text-2xl font-serif text-left mt-4 mb-4 md:mt-3 md:mb-3">
            Need help? Have a question about an order, or about getting in
            touch? We are always happy to hear from you.
          </p>
          <div className="flex flex-col w-full justify-center gap-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="h-10 border-gray-900 bg-slate-400/10 p-2 outline-none"
                placeholder="Your name"
              />
              <input
                type="text"
                className="h-10 border-gray-900 bg-slate-400/10 p-2 outline-none"
                placeholder="Your email outline-none"
              />
            </div>
            <input
              type="text"
              className="h-10 border-gray-900 bg-slate-400/10 p-2 outline-none"
              placeholder="Your phone(optional)"
            />
            <textarea
              className="h-52 bg-slate-400/10 p-2 outline-none"
              placeholder="Your message"
            />
            <button className="h-10 text-white bg-black">Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
