import Image from "next/image";
import LandingPageTextCard from "./(components)/LandingPageTextCard";
import LandingPageColorCard from "./(components)/LandingPageColorCard";

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
      <div className="flex flex-wrap justify-center -mt-16">
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
      <div className="flex flex-wrap justify-center mt-24">
        <LandingPageColorCard
          data={{
            title: "GLASSES",
            bgColor: "bg-pink-100",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYKNXpJOO-gqQ_yVVUmaCwwHxzKGk1EqIqA&s",
          }}
        />
        <LandingPageColorCard
          data={{
            title: "GLASSES",
            bgColor: "bg-white",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYKNXpJOO-gqQ_yVVUmaCwwHxzKGk1EqIqA&s",
          }}
        />
        <LandingPageColorCard
          data={{
            title: "GLASSES",
            bgColor: "bg-sky-100",
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYKNXpJOO-gqQ_yVVUmaCwwHxzKGk1EqIqA&s",
          }}
        />
      </div>
    </div>
  );
}
