"use client";
import Image from "next/image";
import LandingPageTextCard from "./(components)/LandingPageTextCard";
import LandingPageColorCard from "./(components)/LandingPageColorCard";
import Link from "next/link";
import LandingPageProductCard from "./(components)/LandingPageProductCard";
import { useMediaQuery } from "react-responsive";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AvatarCard from "./(components)/AvatarCard";
import { Card, CardContent } from "@/components/ui/card";
import DailyDealsCard from "./(components)/DailyDealsCard";
import ReviewCard from "./(components)/ReviewCard";

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  const avatarsArray = [
    {
      image:
        "https://www.nicobar.com/cdn/shop/files/New_Arrival-1_624d0d7f-338a-4bb5-82ce-ea2b56bc8dd4_180x.jpg?v=1715317242",
      title: "New Arrivals",
    },
    {
      image:
        "https://www.nicobar.com/cdn/shop/files/Shirt_be4c5832-c6fa-47aa-a2ef-28694c7e26a4_180x.jpg?v=1715317289",
      title: "Shirts",
    },
    {
      image:
        "https://www.nicobar.com/cdn/shop/files/Tshirt_180x.jpg?v=1710005556",
      title: "T-Shirts",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtyWCpXE6SdhNjMP9NszskxxA2WwqqfhpQA&s",
      title: "Jeans",
    },
    {
      image:
        "https://www.nicobar.com/cdn/shop/files/Trouser_ae2d1088-5af2-4e7f-a727-5ea8e15b756b_180x.jpg?v=1712733822",
      title: "Trousers",
    },
    {
      image:
        "https://www.nicobar.com/cdn/shop/files/Top_a5ded3ba-4a3c-4ef2-91fd-2c61c9f23a79_180x.jpg?v=1715316221",
      title: "Tops",
    },
    {
      image:
        "https://www.nicobar.com/cdn/shop/files/Bottom_d7c16373-f74e-44c8-9f06-67ff0dcfd3cd_180x.jpg?v=1715316221",
      title: "Bottoms",
    },
    {
      image:
        "https://www.nicobar.com/cdn/shop/files/Bestseller_f95a3c93-e26c-4e23-a1ac-f8d51863d568_180x.jpg?v=1710005180",
      title: "Best sellers",
    },
    {
      image:
        "https://www.nicobar.com/cdn/shop/files/New_arrival_66adca48-5d58-464b-8091-a6edf1b16be0_180x.jpg?v=1715316221",
      title: "New arrivals",
    },
    {
      image:
        "https://www.nicobar.com/cdn/shop/files/Sari_180x.jpg?v=1710005179",
      title: "Sari",
    },
  ];
  const dailyDetailCardsArr = [
    {
      imageUrl:
        "https://media.istockphoto.com/id/1340259073/photo/confident-young-businessman-standing-in-front-of-a-gray-background.jpg?s=612x612&w=0&k=20&c=3nsnWn1KjvJSgVpJawXWO59QVq7-HgE2EWQgKbhD7Dw=",
      title: "Rare rabbit black blazer",
      price: "99.00",
      discountPercents: "25",
      actualPrice: "69.00",
    },
  ];

  const infoCardsArray = [
    {
      title: "Shop 1500+ varieties",
      description: "Live dangerously. Browse every tee available.",
    },
    {
      title: "Don't panic",
      description: "We have made some picks for you. Check out collections",
    },
    {
      title: "Shop blank tees",
      description: "Buy more and build more when you build a blank bundle",
    },
  ];

  const colorCardData = [
    {
      href: "/collections/men",
      data: {
        subTitle: "Urbanstore",
        title: "MEN",
        bgColor: "bg-pink-100",
        imageUrl:
          "https://vestirio.com/cdn/shop/files/007_1800x1800.webp?v=1690795694",
      },
    },
    {
      href: "/collections/women",
      data: {
        subTitle: "Urbanstore",
        title: "WOMEN",
        bgColor: "bg-white",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kqyus094g-5JODil9kwuciLts-fliXYgIA&s",
      },
    },
    {
      href: "/collections/men",
      data: {
        subTitle: "Urbanstore",
        title: "ALL-COLLECTIONS",
        bgColor: "bg-sky-100",
        imageUrl:
          "https://thumbs.dreamstime.com/b/nice-female-male-casual-clothing-posing-to-camera-nice-female-male-casual-clothing-posing-to-camera-113642977.jpg",
      },
    },
  ];

  const landingPageProductData = [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNo7sQlR7qKXey_Xqr8id6HMOLOnqDa1TvptnCeVtr0nj387gzx68fFk9uAR9MfCMxXDhD7GQISSVOJZMwTwtJjTPkNOZh5hrJg4tTB3h__mnopYlIhrT2mWq0SxGWhwZUmRVIlA",
      productTitle: "MEN'S CHECKERED SLIM FIT SHIRT",
      productPrice: "2,399",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNo7sQlR7qKXey_Xqr8id6HMOLOnqDa1TvptnCeVtr0nj387gzx68fFk9uAR9MfCMxXDhD7GQISSVOJZMwTwtJjTPkNOZh5hrJg4tTB3h__mnopYlIhrT2mWq0SxGWhwZUmRVIlA",
      productTitle: "MEN'S CHECKERED SLIM FIT SHIRT",
      productPrice: "2,399",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNo7sQlR7qKXey_Xqr8id6HMOLOnqDa1TvptnCeVtr0nj387gzx68fFk9uAR9MfCMxXDhD7GQISSVOJZMwTwtJjTPkNOZh5hrJg4tTB3h__mnopYlIhrT2mWq0SxGWhwZUmRVIlA",
      productTitle: "MEN'S CHECKERED SLIM FIT SHIRT",
      productPrice: "2,399",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNo7sQlR7qKXey_Xqr8id6HMOLOnqDa1TvptnCeVtr0nj387gzx68fFk9uAR9MfCMxXDhD7GQISSVOJZMwTwtJjTPkNOZh5hrJg4tTB3h__mnopYlIhrT2mWq0SxGWhwZUmRVIlA",
      productTitle: "MEN'S CHECKERED SLIM FIT SHIRT",
      productPrice: "2,399",
    },
  ];

  const buttonData = [
    "New Arrivals",
    "Latest Products",
    "Best Sellers",
    "On Sale",
  ];

  return (
    <div className="p-4">
      {/* Banner starts */}
      <div className="">
        <Image
          src={
            "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16052024-mainbanner-z1-p1-iconicsale-4080HP%20Desktop.jpg"
          }
          height={200}
          width={500}
          layout="responsive"
          alt="Landing image"
          className="h-96"
        />
      </div>
      {/* Banner ended */}

      <div className="md:bg-slate-400/10 pb-8">
        {/* Info cards starts */}
        <div className="flex flex-wrap justify-center md:-mt-16 mt-4 gap-2 md:gap-0 ">
          {infoCardsArray.map((item) => (
            <LandingPageTextCard
              data={{
                title: item.title,
                description: item.description,
              }}
              key={item.title}
            />
          ))}
        </div>
        {/* Info cards end */}

        {/* color cards stats */}
        <div className="flex flex-wrap justify-center mt-8 md:mt-16 gap-2 md:gap-0 ">
          {colorCardData.map((item) => (
            <Link href={item.href} key={item.data.title}>
              <LandingPageColorCard
                data={{
                  subTitle: item.data.subTitle,
                  title: item.data.title,
                  bgColor: item.data.bgColor,
                  imageUrl: item.data.imageUrl,
                }}
              />
            </Link>
          ))}
        </div>
        {/* color cards end */}
      </div>

      {/* Avatar cards starts for desktop */}
      {isDesktopOrLaptop && (
        <div className="flex justify-center items-center mt-8">
          <div className="avatars flex flex-wrap gap-8">
            {avatarsArray.map((item, index) => (
              <AvatarCard
                data={{ imageUrl: item.image, title: item.title }}
                key={item.title}
              />
            ))}
          </div>
        </div>
      )}
      {/* Avatar cards ends for desktop */}

      {/* Avatar cards starts for mobile */}
      {!isDesktopOrLaptop && (
        <div className="flex justify-center items-center -p-0">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {avatarsArray.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-0">
                    <div className="flex items-center justify-center md:p-2 border-none">
                      <AvatarCard
                        data={{
                          imageUrl: item.image,
                          title: item.title,
                        }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-9" />
            <CarouselNext className="mr-9" />
          </Carousel>
        </div>
      )}
      {/* Avatar cards ends for mobile */}

      <div className="p-8 bg-white -mt-4 md:mt-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-md font-bold md:text-2xl uppercase text-center">
            The shop
          </p>
          <p className="uppercase text-sm md:text-xs font-semibold text-center">
            Most covered clothing
          </p>
        </div>
        <div className="buttons-block flex justify-center items-center mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-1/2 gap-2">
            {buttonData.map((text, index) => (
              <button
                key={index}
                className="uppercase border-2 p-2 text-xs hover:bg-violet-400 hover:text-white"
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Landing page product cards starts for desktop */}
        {isDesktopOrLaptop && (
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-6">
              {landingPageProductData.map((data, index) => (
                <LandingPageProductCard key={index} data={data} />
              ))}
            </div>
          </div>
        )}
        {/* Landing page product cards ends for desktop */}

        {/* Landing page product cards starts for mobile */}
        {!isDesktopOrLaptop && (
          <div className="mt-4">
            <Carousel className="">
              <CarouselContent>
                {landingPageProductData.map((data, index) => (
                  <CarouselItem
                    className="flex justify-center items-center"
                    key={index}
                  >
                    <LandingPageProductCard data={data} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-4" />
              <CarouselNext className="mr-4" />
            </Carousel>
          </div>
        )}
        {/* Landing page product cards ends for mobile */}
      </div>
      <hr />

      <div className="bg-slate-200 min-h-96 flex justify-center mt-0 pt-0 md:pt-8 ">
        <div className="flex w-full sm:w-3/5 bg-white justify-center items-center ">
          <div className="flex h-2/3 md:h-full">
            <div className="flex flex-col justify-center items-center p-4 gap-2 w-1/2 border border-gray-200">
              <h1 className="text-sm tracking-wide md:tracking-widester">
                URBANSTORE
              </h1>
              <h1 className="text-2xl">SHOES</h1>
              <h1 className="font-bold text-md uppercase">New collection</h1>
              <p className="mt-2 md:mt-4 text-xs md:text-lg text-center">
                Discover fashion bags for ladies online by very cheap.Find
                fashion shoes of high quality by filtering according to your
                needs.
              </p>
              <button className="uppercase p-4 text-white bg-violet-500 h-8 md:h-10 flex justify-center items-center text-sm md:text-lg mt-2 md:mt-4">
                shop now
              </button>
            </div>
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmDQG1l-JSMGYDvbpkC3NHJNiQYvJ8WcsMQ&s"
              }
              className="w-1/2 h-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-200 min-h-96 flex justify-center mt-0 md:pb-8">
        <div className="flex w-full sm:w-3/5 bg-white justify-center items-center">
          <div className="flex h-2/3 md:h-full -mt-64 md:mt-0">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmDQG1l-JSMGYDvbpkC3NHJNiQYvJ8WcsMQ&s"
              }
              className="w-1/2 h-full"
            />
            <div className="flex flex-col justify-center items-center p-4 gap-2 w-1/2 border border-gray-200">
              <h1 className=" text-sm tracking-wide md:tracking-widester">
                URBANSTORE
              </h1>
              <h1 className="text-2xl">SHOES</h1>
              <h1 className="font-bold text-md uppercase">New collection</h1>
              <p className="mt-2 md:mt-4 text-xs md:text-lg text-center">
                Discover fashion bags for ladies online by very cheap.Find
                fashion shoes of high quality by filtering according to your
                needs.
              </p>
              <button className="uppercase p-4 text-white bg-violet-500 h-8 md:h-10 flex justify-center items-center text-sm md:text-lg mt-2 md:mt-4">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center -mt-28 md:mt-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-gray-500 tracking-widester uppercase text-xs md:text-sm">
            urbanstore
          </p>
          <p className="text-gray-500 uppercase md:text-2xl">daily deals</p>
          <p className="text-gray-600 uppercase text-xs font-bold">
            check out our loving products today
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-8 md:mt-10 gap-2 md:gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <DailyDealsCard
              data={{
                imageUrl: dailyDetailCardsArr[0].imageUrl,
                price: dailyDetailCardsArr[0].price,
                actualPrice: dailyDetailCardsArr[0].actualPrice,
                title: dailyDetailCardsArr[0].title,
                discountPercents: dailyDetailCardsArr[0].discountPercents,
              }}
              key={index}
            />
          ))}
        </div>
      </div>
      <hr className="mt-4" />
      <div className="mt-4 bg-gray-600/10 p-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-gray-500 tracking-widester uppercase text-xs md:text-sm">
            urbanstore
          </p>
          <p className="text-gray-500 uppercase md:text-2xl">
            Public cheers for us!
          </p>
          <p className="text-gray-600 uppercase text-xs font-bold">
            Find out how users are spreading the word!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-8 md:mt-10 gap-4 md:gap-4 items-center">
          <ReviewCard
            data={{
              imageUrl:
                "https://media.istockphoto.com/id/1340259073/photo/confident-young-businessman-standing-in-front-of-a-gray-background.jpg?s=612x612&w=0&k=20&c=3nsnWn1KjvJSgVpJawXWO59QVq7-HgE2EWQgKbhD7Dw=",
              title: "Raviteja",
              subtitle: "@ravitejarps",
              review: "this is a very good shopping website, but the ui is bad",
            }}
          />
          <ReviewCard
            data={{
              imageUrl:
                "https://media.istockphoto.com/id/1340259073/photo/confident-young-businessman-standing-in-front-of-a-gray-background.jpg?s=612x612&w=0&k=20&c=3nsnWn1KjvJSgVpJawXWO59QVq7-HgE2EWQgKbhD7Dw=",
              title: "Raju sirigineedi",
              subtitle: "@RajuAdobe",
              review:
                "Well I hold an iphone 15 pro max, and this site won't looking good in my iphone 15pro, forget about the products.",
            }}
          />
          <ReviewCard
            data={{
              imageUrl:
                "https://media.istockphoto.com/id/1340259073/photo/confident-young-businessman-standing-in-front-of-a-gray-background.jpg?s=612x612&w=0&k=20&c=3nsnWn1KjvJSgVpJawXWO59QVq7-HgE2EWQgKbhD7Dw=",
              title: "Charan naidu",
              subtitle: "@charanlowde",
              review: "developer experience is very bad.",
            }}
          />
          <ReviewCard
            data={{
              imageUrl:
                "https://media.istockphoto.com/id/1340259073/photo/confident-young-businessman-standing-in-front-of-a-gray-background.jpg?s=612x612&w=0&k=20&c=3nsnWn1KjvJSgVpJawXWO59QVq7-HgE2EWQgKbhD7Dw=",
              title: "Anonymous",
              subtitle: "@anonym",
              review:
                "fck this website bro, if you are redirecting to myntra why the hell do you need a website, lol......",
            }}
          />
          <ReviewCard
            data={{
              imageUrl:
                "https://media.istockphoto.com/id/1340259073/photo/confident-young-businessman-standing-in-front-of-a-gray-background.jpg?s=612x612&w=0&k=20&c=3nsnWn1KjvJSgVpJawXWO59QVq7-HgE2EWQgKbhD7Dw=",
              title: "Raviteja",
              subtitle: "@ravitejarps",
              review: "this is a very good shopping website, but the ui is bad",
            }}
          />
          <ReviewCard
            data={{
              imageUrl:
                "https://media.istockphoto.com/id/1340259073/photo/confident-young-businessman-standing-in-front-of-a-gray-background.jpg?s=612x612&w=0&k=20&c=3nsnWn1KjvJSgVpJawXWO59QVq7-HgE2EWQgKbhD7Dw=",
              title: "Raju sirigineedi",
              subtitle: "@RajuAdobe",
              review:
                "Well I hold an iphone 15 pro max, and this site won't looking good in my iphone 15pro, forget about the products.",
            }}
          />
          <ReviewCard
            data={{
              imageUrl:
                "https://media.istockphoto.com/id/1340259073/photo/confident-young-businessman-standing-in-front-of-a-gray-background.jpg?s=612x612&w=0&k=20&c=3nsnWn1KjvJSgVpJawXWO59QVq7-HgE2EWQgKbhD7Dw=",
              title: "Charan naidu",
              subtitle: "@charanlowde",
              review: "developer experience is very bad.",
            }}
          />
          <ReviewCard
            data={{
              imageUrl:
                "https://media.istockphoto.com/id/1340259073/photo/confident-young-businessman-standing-in-front-of-a-gray-background.jpg?s=612x612&w=0&k=20&c=3nsnWn1KjvJSgVpJawXWO59QVq7-HgE2EWQgKbhD7Dw=",
              title: "Anonymous",
              subtitle: "@anonym",
              review:
                "fck this website bro, if you are redirecting to myntra why the hell do you need a website, lol......",
            }}
          />
        </div>
      </div>
    </div>
  );
}
