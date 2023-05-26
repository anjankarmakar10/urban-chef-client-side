import { Spinner } from "flowbite-react";
import LazyLoads from "../../../components/LazyLoads/LazyLoads";
import useChefs from "../../../hooks/useChefs";
import Chef from "../Cards/Chef";

const Chefs = () => {
  const chefs = useChefs();

  return (
    <div className="flex gap-4 flex-wrap justify-center items-center">
      {chefs ? (
        chefs?.map((chef) => (
          <LazyLoads key={chef?.id}>
            <Chef chef={chef} />
          </LazyLoads>
        ))
      ) : (
        <Spinner size={"lg"} />
      )}
    </div>
  );
};

export default Chefs;
