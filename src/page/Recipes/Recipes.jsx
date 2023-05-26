import { Button, Spinner } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Card/Recipe";
import LazyLoads from "../../components/LazyLoads/LazyLoads";
import useScrollTop from "../../hooks/useScrollTop";

const Recipes = () => {
  const { data } = useLoaderData();
  useScrollTop();

  console.log(data);

  return (
    <>
      <div className="chef-hero">
        <section className="container mx-auto px-4 flex flex-col justify-center items-center w-full hero-hight text-white text-center">
          <div>
            <img
              className="mb-3 h-32 object-cover w-32 rounded-full shadow-lg"
              src={data?.chef_picture}
              alt={data?.chef_name}
            />
          </div>

          <h1 className="md:text-8xl text-5xl font-bold mt-1 mb-2">
            {data?.chef_name}
          </h1>
          <p className="max-w-lg mb-2">{data?.description}</p>
          <p className="font-semibold md:text-2xl text-xl uppercase mb">
            {data?.years_of_experience} years of experience
          </p>
          <p className="font-semibold text-lg uppercase">
            Total recipes: {data?.num_of_recipes}
          </p>
          <p className="font-semibold  text-lg uppercase">
            Total Likes: {data?.likes}
          </p>
          <a href="#recipes" className="mt-10">
            <Button
              className="bg-[#D61C22] hover:bg-white hover:text-black transition-all"
              size={"sm"}
            >
              Explore Recipes
            </Button>
          </a>
        </section>
      </div>

      <section id="recipes" className="container mx-auto px-4 py-12">
        <h2 className="text-center text-white font-bold md:text-5xl text-3xl uppercase bg-[#222] py-4 px-6 w-fit mx-auto mb-8">
          Recipes
        </h2>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {data ? (
            data?.recipes.map((recipe) => (
              <LazyLoads key={recipe?.id}>
                <Recipe recipe={recipe} />
              </LazyLoads>
            ))
          ) : (
            <Spinner size={"lg"} />
          )}
        </div>
      </section>
    </>
  );
};

export default Recipes;
