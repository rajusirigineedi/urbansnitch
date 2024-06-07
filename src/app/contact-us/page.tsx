import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <div className="w-full mt-8 font-mono">
            <p className="font-bold text-3xl underline">FAQs</p>
            <Accordion type="single" className="w-full mt-4" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-sm md:text-base">
                  How do I start a return?
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-base text-gray-500">
                  The quickest way to initiate a return/exchange is to call or
                  WhatsApp us at{" "}
                  <span className="font-bold">
                    +91 9010778702 / +91 7036836879
                  </span>
                  , or write to us at{" "}
                  <span className="font-bold">
                    <a href="mailto:care@hermanhood.com">care@hermanhood.com</a>
                  </span>{" "}
                  with your order ID and reason for return. We’ll take care of
                  the rest!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-sm md:text-base">
                  Can I make an exchange?
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-base text-gray-500">
                  We offer size exchanges only for the same product, style, and
                  color that you have purchased.
                  <br /> In case your required size is not available, a credit
                  note for the amount spent will be issued to you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-sm md:text-base">
                  What if I receive a damaged product?
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-base text-gray-500">
                  Please do not accept a delivery if the packaging is not
                  properly sealed or is damaged. <br />
                  For order issues such as damaged or defective products, please
                  contact us at{" "}
                  <span className="font-bold">
                    <a href="mailto:care@hermanhood.com">care@hermanhood.com</a>
                  </span>{" "}
                  within 48 hours of receiving the products, along with product
                  images.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-sm md:text-base">
                  What if I receive the wrong product?
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-base text-gray-500">
                  In case a wrong product is delivered, you can whatsapp us at
                  <span className="font-bold">
                    +91 9010778702 or +91 7036836879
                  </span>
                  or email us at
                  <span className="font-bold">
                    {" "}
                    <a href="mailto:care@hermanhood.com">care@hermanhood.com</a>
                  </span>{" "}
                  along with the product images and the order number within 48
                  hours of receiving the products, along with product images
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-sm md:text-base">
                  What if a product is missing from my order?
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-base text-gray-500">
                  In case a product or products are missing from your order, you
                  can call or whatsapp us at{" "}
                  <span className="font-bold">
                    +91 9010778702 or +91 7036836879
                  </span>
                  , or email us at{" "}
                  <span className="font-bold">
                    <a href="mailto:care@hermanhood.com">care@hermanhood.com</a>
                  </span>{" "}
                  within 48 hours of receiving the products and we’ll get back
                  to you within 24 hours.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
