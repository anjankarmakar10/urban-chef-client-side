import Banner from "../../components/Banner/Banner";

const About = () => {
  return (
    <>
      <Banner bgClass={"bg-about"} title={"About Us"} />
      <div className="flex flex-col items-center py-14 gap-2  bg-[#F4F2E9]">
        <h5 className="font-bold text-2xl text-[#D61C3C]">Urban Chefs</h5>
        <h2 className="md:text-6xl text-4xl uppercase font-bold">OUR STORY</h2>

        <div className="text-center max-w-4xl p-4 mt-4 flex flex-col gap-3 text-lg">
          <p>
            Welcome to our restaurant! We take pride in serving delicious food
            made with the freshest ingredients and prepared with care by our
            talented chefs. Our menu features a variety of dishes inspired by
            flavors from around the world, including classic favorites and
            exciting new creations.
          </p>
          <p>
            At our restaurant, we believe that dining should be a memorable
            experience, which is why we strive to provide exceptional service in
            a warm and welcoming atmosphere. Whether you're joining us for a
            romantic dinner for two or a lively gathering with friends and
            family, we are dedicated to making your visit an enjoyable one.
          </p>
          <p>
            We also offer a carefully curated selection of wine, beer, and
            cocktails to complement your meal, as well as a dessert menu
            featuring decadent treats that are sure to satisfy your sweet tooth.
          </p>
          <p>
            Thank you for considering our restaurant for your next dining
            experience. We look forward to serving you soon!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
