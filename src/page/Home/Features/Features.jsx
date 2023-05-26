import Chefs from "../Chefs/Chefs";

const Features = () => {
  return (
    <section id="ourchefs" className="container mx-auto px-4 py-12">
      <h2 className="text-center text-white font-bold md:text-5xl text-3xl uppercase bg-[#222] py-4 px-6 w-fit mx-auto mb-8">
        Our Chefs
      </h2>
      <Chefs />
    </section>
  );
};

export default Features;
