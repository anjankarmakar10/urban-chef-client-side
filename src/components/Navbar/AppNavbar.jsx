import { Navbar, Dropdown, Button, Tooltip } from "flowbite-react";
import { useAuth } from "../../context/AuthContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AppNavbar = () => {
  const { user, logOut } = useAuth();
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhoto(user?.photoURL);
    }, [2000]);

    return () => clearTimeout(timeout);
  }, [user]);

  return (
    <header className="border-b top-0 sticky bg-white z-50">
      <Navbar className="container mx-auto" fluid={true} rounded={true}>
        <Link to={"/"}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Urban Chefs
          </span>
        </Link>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Tooltip content={user?.displayName}>
                  <img
                    className="h-10 w-10 object-cover rounded-full border-2 border-[#282A36]"
                    alt="User settings"
                    src={`${photo || user.photoURL}`}
                  />
                </Tooltip>
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>

              <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/signin" className="mx-2">
              <Button color="light" size={"sm"}>
                Sign In
              </Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/favorite"}>Favorites</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default AppNavbar;
