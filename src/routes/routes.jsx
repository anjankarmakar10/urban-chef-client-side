import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import Contact from "../page/Contact/Contact";
import About from "../page/About/About";
import Signin from "../page/SignIn/Signin";
import SignUp from "../page/SignUp/SignUp";
import Recipes from "../page/Recipes/Recipes";
import axios from "axios";
import Error from "../page/Error/Error";
import PrivateRoute from "./PrivateRoute";
import Favorite from "../page/Favorites/Favorite";
import Blogs from "../page/Blogs/Blogs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <Recipes />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await axios.get(
            `https://urban-chefs-server-2-0.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "favorite",
        element: (
          <PrivateRoute>
            <Favorite />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
