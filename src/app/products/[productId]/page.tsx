"use client";
import FooterBox from "@/app/(components)/FooterBox";
import { FooterBoxData } from "@/app/(interfaces)/footerboxdata";
import { footerBoxDataArray } from "@/app/(utils)/constants";
import useMediaCustom from "@/hooks/useMediaCustom";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useReducer } from "react";
import {
  CiCreditCard1,
  CiDeliveryTruck,
  CiGlobe,
  CiHeart,
  CiWallet,
} from "react-icons/ci";
import { PiMoneyWavyLight } from "react-icons/pi";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LandingPageProductCard from "@/app/(components)/LandingPageProductCard";

const ProductDetailsPage = ({ params }: { params: { productId: string } }) => {
  const productId = params.productId;
  const isDesktop = useMediaCustom();
  const sizesButtonsArray = ["S", "M", "L", "XL", "2XL", "3XL"];
  const [sizeClicked, setSizeClicked] = useState(false);
  return (
    <div className="p-2 w-full">
      <p className="text-center font-euclid text-sm mt-2 mb-2 text-gray-500 underline">
        Home/Colletions/Products
      </p>
      {isDesktop && (
        <div className="flex gap-6 font-euclid">
          <div className="w-2/3 flex flex-wrap">
            <img
              src="https://www.nicobar.com/cdn/shop/files/NBI033623_1_480x.jpg?v=1715146944"
              alt=""
              className="w-1/2 border-r-4"
            />
            <img
              src="https://www.nicobar.com/cdn/shop/files/NBI033623_2_480x.jpg?v=1715146946"
              alt=""
              className="w-1/2"
            />
            <div className="mt-2 flex gap-2 mb-2">
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
            <img
              src="https://www.nicobar.com/cdn/shop/files/NBI033623_3_480x.jpg?v=1715146948"
              alt=""
              className="w-1/2 border-r-4"
            />
            <img
              src="https://www.nicobar.com/cdn/shop/files/NBI033623_4_480x.jpg?v=1715146950"
              alt=""
              className="w-1/2"
            />
          </div>
          <div className="w-1/3 flex">
            <div className="flex flex-col gap-6">
              <p className="product-title text-xl font-semibold text-gray-700">
                Coastal Kurta - Lime
              </p>
              <p className="product-description text-gray-500 text-sm">
                This classic fit kurta in a cool and refreshing solid lime hue
                keeps you feeling cool and looking great.
              </p>
              <p className="text-sm">
                <span className="text-gray-400">MRP</span>&nbsp;&nbsp;
                <span>&#x20b9; 4,500</span>&nbsp;&nbsp;
                <span className="text-gray-400">inclusive of all taxes</span>
              </p>
              <p className="text-sm">
                <span className="text-gray-400">Color : </span>
                <span className="text-gray-700">Lime</span>
              </p>
              <p className="text-sm">
                <span className="text-gray-400">Material : </span>
                <span className="text-gray-700">100% Organic Cotton</span>
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <span className="text-gray-400 text-sm">Size:</span>
                <div className="size-buttons flex gap-3">
                  {sizesButtonsArray.map((item) => (
                    <button
                      className={`text-gray-400 border border-gray-400 w-8 h-8 text-xs`}
                      key={item}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="w-full bg-black/100 text-white text-md h-10 mt-2">
                  BUY NOW
                </button>
                <span className="text-xs text-gray-400">
                  Note: clicking on BUY NOW will take you to myntra.
                </span>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <img
                  src="https://www.nicobar.com/cdn/shop/files/order_480x.svg?v=1676354450"
                  alt=""
                  className="w-4 h-4"
                />
                <span className="text-gray-400 text-sm">
                  Free shipping on orders above ₹ 1,000
                </span>
              </div>
              <div className="flex gap-3 -mt-3">
                <img
                  src="https://www.nicobar.com/cdn/shop/files/cash_480x.svg?v=1676354450"
                  alt=""
                  className="w-4 h-4"
                />
                <span className="text-gray-400 text-sm">
                  Cash on Delivery (COD) available except on express delivery
                  orders
                </span>
              </div>
              <hr />
              <div className="product-details flex flex-col">
                <div>
                  <p className="text-lg text-gray-700">Product details</p>
                  <ul className="gap-2 flex flex-col list-disc ml-6 mt-3">
                    <li className="text-sm text-gray-500">
                      Crafted in linen cotton, this one is a no-brainer.
                    </li>
                    <li className="text-sm text-gray-500">
                      The lining has a beautiful print of red and ivory bold
                      flower.
                    </li>
                    <li className="text-sm text-gray-500">
                      Find the second button on the placket in red.
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-lg text-gray-700">SIZE & FIT</p>
                  <ul className="gap-2 flex flex-col list-disc ml-6 mt-3">
                    <li className="text-sm text-gray-500">Fit: Classic</li>
                    <li className="text-sm text-gray-500">Model Height: 6ft</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="text-lg text-gray-700">CARE INSTRUCTIONS</p>
                  <ul className="gap-2 flex flex-col list-disc ml-6 mt-3">
                    <li className="text-sm text-gray-500">Dry clean only.</li>
                    <li className="text-sm text-gray-500">Cool iron.</li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="w-full -mt-6 font-mono">
                <Accordion type="single" className="w-full mt-4" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-sm md:text-base">
                      Delivery & Payment
                    </AccordionTrigger>
                    <AccordionContent className="text-xs md:text-base text-gray-500">
                      <ul className="gap-2 flex flex-col list-disc ml-6 mt-3">
                        <li className="text-sm text-gray-500">
                          Shipping charges will be calculated on checkout page
                          for all orders below INR 1,000. Anything over and
                          above is shipped for free
                        </li>
                        <li className="text-sm text-gray-500">
                          <div className="flex flex-col">
                            <p>We accept :</p>
                            <div className="flex gap-2">
                              <div className="flex flex-col justify-center items-center w-1/4 p-3 gap-2">
                                <CiCreditCard1 className="w-4 h-4" />
                                <p className="text-xs text-gray-600">
                                  Debit/Credit cards
                                </p>
                              </div>
                              <span className="border-r-2"></span>
                              <div className="flex flex-col justify-center items-center w-1/4 p-3 gap-2">
                                <CiGlobe className="w-4 h-4" />
                                <p className="text-xs text-gray-600">
                                  Net banking
                                </p>
                              </div>
                              <span className="border-r-2"></span>
                              <div className="flex flex-col justify-center items-center w-1/4 p-3 gap-2">
                                <CiWallet className="w-4 h-4" />
                                <p className="text-xs text-gray-600">Wallet</p>
                              </div>
                              <span className="border-r-2"></span>
                              <div className="flex flex-col justify-center items-center w-1/4 p-3 gap-2">
                                <PiMoneyWavyLight className="w-4 h-4" />
                                <p className="text-xs text-gray-600">
                                  Cash on
                                  <br />
                                  Delivery
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left text-sm md:text-base">
                      Return & Exchange
                    </AccordionTrigger>
                    <AccordionContent className="text-xs md:text-base text-gray-500">
                      <ul className="gap-2 flex flex-col list-disc ml-6 mt-3">
                        <li className="text-sm text-gray-500">
                          We hope you will love everything you order from us,
                          but if something isn’t quite right, you have 15 days
                          from the delivery date to return it to us. We offer a
                          credit note valid for a year from the date of issue.
                          As a company policy, we do not provide refunds on any
                          product sold.
                        </li>
                        <li className="text-sm text-gray-500">
                          <div className="flex flex-col">
                            <p>
                              Here’s how you can return or exchange your order:
                            </p>
                            <div className="flex flex-col gap-2">
                              <div className="flex flex-col j p-3 gap-2">
                                <div className="flex ustify-center items-center gap-4">
                                  <CiDeliveryTruck className="w-12 h-12" />
                                  <p className="text-md font-bold text-gray-600">
                                    HOME COLLECTION
                                  </p>
                                </div>
                                <p className="text-gray-600 text-sm">
                                  You can request an at-home pick-up for your
                                  returns and exchanges. Simply write to
                                  care@nicobar.com or call/WhatsApp on +91
                                  8588000150 or +91 8588000151. A return
                                  shipping fee of Rs 200 will be deducted from
                                  all orders to arrange for your pickups.
                                </p>
                              </div>
                              <div className="flex flex-col j p-3 gap-2">
                                <div className="flex ustify-center items-center gap-4">
                                  <IoStorefrontOutline className="w-12 h-12" />
                                  <p className="text-md font-bold text-gray-600">
                                    At HERMANHOOD Store
                                  </p>
                                </div>
                                <p className="text-gray-600 text-sm">
                                  You can return and exchange your items free of
                                  charge to any Nicobar store. <br />
                                  Any additional shipping charges or gift wrap
                                  packaging, if paid, will be deducted from your
                                  credit note amount.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="font-bold text-black text-sm">
                          All items must be returned in their sealed original
                          packaging and in its original condition.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left text-sm md:text-base">
                      More Information
                    </AccordionTrigger>
                    <AccordionContent className="text-xs md:text-base text-gray-500">
                      <p className="text-sm mt-4">
                        <span className="text-black font-semibold">
                          Country of origin:{" "}
                        </span>
                        <span className="text-gray-600">India</span>
                      </p>
                      <p className="text-sm mt-3 flex flex-col">
                        <span className="text-black font-semibold">
                          Manufactured by:{" "}
                        </span>

                        <span className="text-gray-600 mt-2">
                          Nicobar Design Private Limited
                          <br />
                          Plot No. 59 NIT, Faridabad, Haryana,
                          <br />
                          121001
                        </span>
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="p-6 w-full flex flex-col justify-between h-60 bg-slate-400/10 mt-6">
                  <div className=" flex flex-col gap-2">
                    <p className="text-sm font-bold">
                      Have a question ? We can help.
                    </p>
                    <p className="text-gray-500 text-xs">
                      Mon-Sat - 9:30 AM TO 5:30 PM (IST)
                    </p>
                  </div>
                  <span className="flex justify-start items-center gap-3 mt-4">
                    <FaWhatsapp />
                    <span className="text-sm">Call or WhatsApp us</span>
                  </span>
                  <span className="text-xs text-black ml-6 mt-2">
                    + 91 9010778702 | + 91 7036836879
                  </span>

                  <span className="flex justify-start items-center gap-3 mt-4">
                    <MdOutlineEmail />

                    <span className="text-sm">
                      Email us{" "}
                      <span className="font-bold">care@hermanhood.com</span>{" "}
                    </span>
                  </span>
                  <span className="text-xs text-black ml-6 mt-2">
                    + 91 8588000150 | + 91 8588000151
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isDesktop && (
        <div className="w-full font-euclid p-2">
          <div>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="https://www.nicobar.com/cdn/shop/files/NBI033623_1_480x.jpg?v=1715146944"
                    alt=""
                    className=""
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://www.nicobar.com/cdn/shop/files/NBI033623_2_480x.jpg?v=1715146946"
                    alt=""
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://www.nicobar.com/cdn/shop/files/NBI033623_3_480x.jpg?v=1715146948"
                    alt=""
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://www.nicobar.com/cdn/shop/files/NBI033623_5_1200x.jpg?v=1715146952"
                    alt=""
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="ml-14" />
              <CarouselNext className="mr-14" />
            </Carousel>
          </div>
          <div className="flex flex-col gap-6 mt-4">
            <p className="product-title text-xl font-semibold text-gray-700">
              Coastal Kurta - Lime
            </p>
            <p className="product-description text-gray-500 text-sm">
              This classic fit kurta in a cool and refreshing solid lime hue
              keeps you feeling cool and looking great.
            </p>
            <p className="text-sm">
              <span className="text-gray-400">MRP</span>&nbsp;&nbsp;
              <span>&#x20b9; 4,500</span>&nbsp;&nbsp;
              <span className="text-gray-400">inclusive of all taxes</span>
            </p>
            <p className="text-sm">
              <span className="text-gray-400">Color : </span>
              <span className="text-gray-700">Lime</span>
            </p>
            <p className="text-sm">
              <span className="text-gray-400">Material : </span>
              <span className="text-gray-700">100% Organic Cotton</span>
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <span className="text-gray-400 text-sm">Size:</span>
              <div className="size-buttons flex  gap-3">
                {sizesButtonsArray.map((item) => (
                  <button
                    className="text-gray-400 border border-gray-400 w-8 h-8 text-xs"
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="w-full bg-gray-500/100 text-white text-md h-10 mt-2 uppercase">
                Add to wishlist
              </button>
              <button className="w-full bg-black/100 text-white text-md h-10 mt-2">
                BUY NOW
              </button>
              <span className="text-xs text-gray-400">
                Note: clicking on BUY NOW will take you to myntra.
              </span>
            </div>
            <div className="flex gap-3 justify-start items-center">
              <img
                src="https://www.nicobar.com/cdn/shop/files/order_480x.svg?v=1676354450"
                alt=""
                className="w-4 h-4"
              />
              <span className="text-gray-400 text-sm">
                Free shipping on orders above ₹ 1,000
              </span>
            </div>
            <div className="flex gap-3 -mt-3">
              <img
                src="https://www.nicobar.com/cdn/shop/files/cash_480x.svg?v=1676354450"
                alt=""
                className="w-4 h-4"
              />
              <span className="text-gray-400 text-sm">
                Cash on Delivery (COD) available except on express delivery
                orders
              </span>
            </div>
            <hr />
            <div className="product-details flex flex-col">
              <div>
                <p className="text-lg text-gray-700">Product details</p>
                <ul className="gap-2 flex flex-col list-disc ml-6 mt-3">
                  <li className="text-sm text-gray-500">
                    Crafted in linen cotton, this one is a no-brainer.
                  </li>
                  <li className="text-sm text-gray-500">
                    The lining has a beautiful print of red and ivory bold
                    flower.
                  </li>
                  <li className="text-sm text-gray-500">
                    Find the second button on the placket in red.
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-lg text-gray-700">SIZE & FIT</p>
                <ul className="gap-2 flex flex-col list-disc ml-6 mt-3">
                  <li className="text-sm text-gray-500">Fit: Classic</li>
                  <li className="text-sm text-gray-500">Model Height: 6ft</li>
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-lg text-gray-700">CARE INSTRUCTIONS</p>
                <ul className="gap-2 flex flex-col list-disc ml-6 mt-3">
                  <li className="text-sm text-gray-500">Dry clean only.</li>
                  <li className="text-sm text-gray-500">Cool iron.</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="w-full -mt-6 font-mono">
              <Accordion type="single" className="w-full mt-4" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    Delivery & Payment
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-base text-gray-500">
                    <ul className="gap-2 flex flex-col list-disc ml-6 mt-3">
                      <li className="text-sm text-gray-500">
                        Shipping charges will be calculated on checkout page for
                        all orders below INR 1,000. Anything over and above is
                        shipped for free
                      </li>
                      <li className="text-sm text-gray-500">
                        <div className="flex flex-col">
                          <p>We accept :</p>
                          <div className="flex gap-2">
                            <div className="flex flex-col justify-center items-center w-1/4 p-3 gap-2">
                              <CiCreditCard1 className="w-4 h-4" />
                              <p className="text-xs text-gray-600">
                                Debit/Credit cards
                              </p>
                            </div>
                            <span className="border-r-2"></span>
                            <div className="flex flex-col justify-center items-center w-1/4 p-3 gap-2">
                              <CiGlobe className="w-4 h-4" />
                              <p className="text-xs text-gray-600">
                                Net banking
                              </p>
                            </div>
                            <span className="border-r-2"></span>
                            <div className="flex flex-col justify-center items-center w-1/4 p-3 gap-2">
                              <CiWallet className="w-4 h-4" />
                              <p className="text-xs text-gray-600">Wallet</p>
                            </div>
                            <span className="border-r-2"></span>
                            <div className="flex flex-col justify-center items-center w-1/4 p-3 gap-2">
                              <PiMoneyWavyLight className="w-4 h-4" />
                              <p className="text-xs text-gray-600">
                                Cash on
                                <br />
                                Delivery
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    Return & Exchange
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-base text-gray-500">
                    <ul className="gap-2 flex flex-col list-disc ml-6 mt-3">
                      <li className="text-sm text-gray-500">
                        We hope you will love everything you order from us, but
                        if something isn’t quite right, you have 15 days from
                        the delivery date to return it to us. We offer a credit
                        note valid for a year from the date of issue. As a
                        company policy, we do not provide refunds on any product
                        sold.
                      </li>
                      <li className="text-sm text-gray-500">
                        <div className="flex flex-col">
                          <p>
                            Here’s how you can return or exchange your order:
                          </p>
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col j p-3 gap-2">
                              <div className="flex ustify-center items-center gap-4">
                                <CiDeliveryTruck className="w-12 h-12" />
                                <p className="text-md font-bold text-gray-600">
                                  HOME COLLECTION
                                </p>
                              </div>
                              <p className="text-gray-600 text-sm">
                                You can request an at-home pick-up for your
                                returns and exchanges. Simply write to
                                care@nicobar.com or call/WhatsApp on +91
                                8588000150 or +91 8588000151. A return shipping
                                fee of Rs 200 will be deducted from all orders
                                to arrange for your pickups.
                              </p>
                            </div>
                            <div className="flex flex-col j p-3 gap-2">
                              <div className="flex ustify-center items-center gap-4">
                                <IoStorefrontOutline className="w-12 h-12" />
                                <p className="text-md font-bold text-gray-600">
                                  At HERMANHOOD Store
                                </p>
                              </div>
                              <p className="text-gray-600 text-sm">
                                You can return and exchange your items free of
                                charge to any Nicobar store. <br />
                                Any additional shipping charges or gift wrap
                                packaging, if paid, will be deducted from your
                                credit note amount.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="font-bold text-black text-sm">
                        All items must be returned in their sealed original
                        packaging and in its original condition.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    More Information
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-base text-gray-500">
                    <p className="text-sm mt-4">
                      <span className="text-black font-semibold">
                        Country of origin:{" "}
                      </span>
                      <span className="text-gray-600">India</span>
                    </p>
                    <p className="text-sm mt-3 flex flex-col">
                      <span className="text-black font-semibold">
                        Manufactured by:{" "}
                      </span>

                      <span className="text-gray-600 mt-2">
                        Nicobar Design Private Limited
                        <br />
                        Plot No. 59 NIT, Faridabad, Haryana,
                        <br />
                        121001
                      </span>
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="p-6 w-full flex flex-col justify-between h-60 bg-slate-400/10 mt-6">
                <div className=" flex flex-col gap-2">
                  <p className="text-sm font-bold">
                    Have a question ? We can help.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Mon-Sat - 9:30 AM TO 5:30 PM (IST)
                  </p>
                </div>
                <span className="flex justify-start items-center gap-3 mt-4">
                  <FaWhatsapp />
                  <span className="text-sm">Call or WhatsApp us</span>
                </span>
                <span className="text-xs text-black ml-6 mt-2">
                  + 91 9010778702 | + 91 7036836879
                </span>

                <span className="flex justify-start items-center gap-3 mt-4">
                  <MdOutlineEmail />

                  <span className="text-sm">
                    Email us{" "}
                    <span className="font-bold">care@hermanhood.com</span>{" "}
                  </span>
                </span>
                <span className="text-xs text-black ml-6 mt-2">
                  + 91 8588000150 | + 91 8588000151
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
