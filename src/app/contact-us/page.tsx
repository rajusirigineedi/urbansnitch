import Image from "next/image";
import React from "react";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const page = () => {
  return (
    <div className="flex flex-col font-mono">
      <Image
        src={"/contact-us-hd.png"}
        alt="Contact us image"
        layout="responsive"
        width={400}
        height={200}
      />
      <div className="min-h-96 flex justify-center mt-0 md:pt-10 ">
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
                + 91 8588000150 | + 91 8588000151
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
                <p className="text-xs md:text-sm">carporate@hermanhood.com</p>
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
    </div>
  );
};

export default page;
