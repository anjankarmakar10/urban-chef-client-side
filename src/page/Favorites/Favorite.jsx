import { useFavorite } from "../../context/FavoriteContext";
import { Card } from "flowbite-react";
const Favorite = () => {
  const { favorite } = useFavorite();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 min-h-screen flex flex-col gap-2">
      {favorite.length > 0 ? (
        favorite?.map((item, index) => (
          <Card key={index}>
            <div className="flex gap-4 items-center">
              <img
                className="w-20 h-20 object-cover"
                src={item?.image_url}
                alt={item?.title}
              />
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item?.title}
              </h5>
            </div>
          </Card>
        ))
      ) : (
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          No recipe in favorite
        </h5>
      )}
    </div>
  );
};

export default Favorite;
