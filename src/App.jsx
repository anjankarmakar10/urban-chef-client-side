import { Outlet } from "react-router-dom";
import AppNavbar from "./components/Navbar/AppNavbar";
import AuthProvider from "./context/AuthContext";
import Footer from "./components/Footer/Footer";
import FavoriteProvider from "./context/FavoriteContext";

function App() {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <AppNavbar />
        <Outlet />
        <Footer />
      </FavoriteProvider>
    </AuthProvider>
  );
}

export default App;
