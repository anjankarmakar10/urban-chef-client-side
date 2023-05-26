import { Button } from "flowbite-react";

const Hero = () => {
  return (
    <div className="bg-hero">
      <section className="container mx-auto px-4 flex flex-col justify-center items-center w-full hero-hight text-white text-center">
        <h2 className="md:text-4xl text-3xl font-bold">Welcome To</h2>
        <h1 className="md:text-8xl text-5xl font-bold mt-3 mb-2">Urban Chef</h1>
        <p className="font-semibold md:text-2xl text-xl uppercase mb-6">
          Home of world top chefs
        </p>
        <a href="#ourchefs">
          <Button
            className="bg-[#D61C22] hover:bg-white hover:text-black transition-all"
            size={"sm"}
          >
            Explore Chefs
          </Button>
        </a>
      </section>
    </div>
  );
};

export default Hero;
