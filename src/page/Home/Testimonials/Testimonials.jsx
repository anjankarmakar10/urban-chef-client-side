import { Carousel } from "flowbite-react";

import data from "./data";
import Testimonial from "./Card/Testimonial";

const Testimonials = () => {
  return (
    <section id="ourchefs" className="container mx-auto px-4 py-12">
      <h2 className="text-center text-white font-bold md:text-2xl text-xl uppercase bg-[#222] py-4 px-6 w-fit mx-auto mb-8">
        Testimonials
      </h2>
      <div>
        <div className="h-96">
          <Carousel style={{ height: "100%" }}>
            {data.map((item, index) => (
              <Testimonial item={item} key={index} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
