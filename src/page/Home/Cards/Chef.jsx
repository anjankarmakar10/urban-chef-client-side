import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  return (
    <article className="max-w-sm">
      <Card>
        <div className="flex flex-col items-center py-6">
          <img
            className="mb-3 h-32 object-cover w-32 rounded-full shadow-lg"
            src={chef?.chef_picture}
            alt={chef?.chef_name}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {chef?.chef_name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {chef?.years_of_experience} years of experience
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Total recipes: {chef?.num_of_recipes}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Likes: {chef?.likes}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Link
              to={`chef/${chef?.id}`}
              href="#"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              View Recipes
            </Link>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Chef;
