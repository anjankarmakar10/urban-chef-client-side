const Banner = ({ bgClass, title }) => {
  return (
    <div className={`${bgClass}`}>
      <section className="container mx-auto px-4 flex flex-col justify-center items-center w-full banner-hight text-white text-center">
        <h1 className="md:text-6xl text-4xl uppercase font-bold mt-3 mb-2">
          {title}
        </h1>
      </section>
    </div>
  );
};

export default Banner;
