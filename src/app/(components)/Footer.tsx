import { headers } from "next/headers";
import React from "react";

interface FooterBoxData {
  iconUrl: string;
  heading: string;
  description: string;
}

const FooterBox: React.FC<{ data: FooterBoxData }> = ({
  data,
}: {
  data: FooterBoxData;
}) => {
  return (
    <div className="w-1/4 bg-slate-400/10 p-4 flex ">
      <img src={data.iconUrl} alt="icon" />
      <div className="flex">
        <p>{data.heading}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="font-euclid">
      <div className="w-full bg-slate-400/10 shadow-lg border-gray-300 min-h-56 flex flex-col p-4">
        <div className="flex flex-col items-center justify-center ">
          <p className="font-butler font-extrabold text-center text-2xl text-gray-700">
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
      <div>
        <FooterBox
          data={{
            iconUrl:
              "https://www.nicobar.com/cdn/shop/files/return.svg?v=1676354450",
            heading: "Easy returns",
            description: "Return within 15 days order delivery",
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
