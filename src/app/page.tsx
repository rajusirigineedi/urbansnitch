import Image from "next/image";
import LandingPageTextCard from "./(components)/LandingPageTextCard";
import LandingPageColorCard from "./(components)/LandingPageColorCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <div className="">
        <Image
          src={
            "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16052024-mainbanner-z1-p1-iconicsale-4080HP%20Desktop.jpg"
          }
          height={200}
          width={500}
          layout="responsive"
          alt="Landing image"
        />
      </div>
      <div className="md:bg-slate-400/10 pb-16">
        <div className="flex flex-wrap justify-center md:-mt-16 mt-4 gap-2 md:gap-0 ">
          <LandingPageTextCard
            data={{
              title: "Shop 1500+ varieties",
              description: "Live dangerously.Browse every tee available.",
            }}
          />
          <LandingPageTextCard
            data={{
              title: "Don't panic",
              description:
                "We have made some picks for you.Check out collections",
            }}
          />
          <LandingPageTextCard
            data={{
              title: "Shop blank tees",
              description:
                "Buy more and build more when you build a blank bundle",
            }}
          />
        </div>
        <div className="flex flex-wrap justify-center mt-8 md:mt-16 gap-2 md:gap-0 ">
          <Link href={"/collections/men"}>
            <LandingPageColorCard
              data={{
                title: "MEN",
                bgColor: "bg-pink-100",
                imageUrl:
                  "https://vestirio.com/cdn/shop/files/007_1800x1800.webp?v=1690795694",
              }}
            />
          </Link>
          <Link href={"/collections/women"}>
            <LandingPageColorCard
              data={{
                title: "WOMEN",
                bgColor: "bg-white",
                imageUrl:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kqyus094g-5JODil9kwuciLts-fliXYgIA&s",
              }}
            />
          </Link>
          <LandingPageColorCard
            data={{
              title: "ALL-COLLECTIONS",
              bgColor: "bg-sky-100",
              imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYKNXpJOO-gqQ_yVVUmaCwwHxzKGk1EqIqA&s",
            }}
          />
        </div>
      </div>
      <div className="p-8 bg-white h-100 border border-l-2">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-sm md:text-2xl uppercase text-center">The shop</p>
          <p className="uppercase text-sm md:text-xs font-semibold text-center">
            Most covered clothing
          </p>
        </div>
        <div className="buttons-block flex justify-center items-center mt-2">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-1/2 gap-2">
            <button className="uppercase border-2 p-2 text-xs hover:bg-violet-400 hover:text-white">
              New Arrivals
            </button>
            <button className="uppercase border-2 p-2 text-xs hover:bg-violet-400 hover:text-white">
              latest products
            </button>
            <button className="uppercase border-2 p-2 text-xs hover:bg-violet-400 hover:text-white">
              best sellers
            </button>
            <button className="uppercase border-2 p-2 text-xs hover:bg-violet-400 hover:text-white">
              on sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
