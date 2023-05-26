import { Card, Button } from "flowbite-react";
import { useFavorite } from "../../../context/FavoriteContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
const Recipe = ({ recipe }) => {
  const { favorite, setFavorite } = useFavorite();
  const [exist, setExist] = useState(false);

  const notifySuccess = () =>
    toast.success("Added Favorite", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleClick = () => {
    setExist(true);
    favorite.forEach((element) => {
      if (element?.id === recipe?.id) {
        setExist(true);
      }
    });

    if (!exist) {
      setFavorite((fav) => [...fav, recipe]);
      notifySuccess();
    }
  };

  return (
    <>
      <ToastContainer />

      <article className="max-w-sm">
        <Card>
          <img className="h-60 object-cover" src={recipe?.image_url} alt="" />
          <h5 className="text-2xl line-clamp-1 font-bold tracking-tight text-gray-900 ">
            {recipe?.title}
          </h5>
          <div className="mb-[-20px] flex items-center justify-between gap-2">
            <h6 className="text-xl font-bold text-gray-900 ">ingredients</h6>
            <div onClick={handleClick} className="cursor-pointer">
              <Button disabled={exist} size={"xs"}>
                Add to Favorite
              </Button>
            </div>
          </div>
          <ol className="flex flex-col gap-2 list-decimal p-4 text-sm">
            {recipe?.ingredients?.map((item, index) => (
              <li key={index}>{item?.description}</li>
            ))}
          </ol>
        </Card>
      </article>
    </>
  );
};

export default Recipe;
