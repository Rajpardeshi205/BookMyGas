import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (user && user.name) {
      console.log(`Welcome, ${user.name}`);
    }
  }, [user]);

  const logout = () => {
    if (user && user.name) {
      console.log(`Logging out, ${user.name}`);
    }
    localStorage.clear("users");
    navigate("/login");
  };

  const navList = (
    <ul className="flex flex-col lg:flex-row lg:space-x-5 text-black text-md px-5 font-medium">
      <li>
        <Link
          to="/About"
          className={`${
            location.pathname === "/About"
              ? "text-red-600 bg-black px-3 py-1 rounded-lg underline underline-offset-4"
              : "text-black hover:text-red-600 hover:underline"
          }`}
        >
          ABOUT
        </Link>
      </li>
      <li>
        <Link
          to="/Services"
          className={`${
            location.pathname === "/Services"
              ? "text-red-600 bg-black px-3 py-1 rounded-lg underline underline-offset-4"
              : "text-black hover:text-red-600 hover:underline"
          }`}
        >
          SERVICES
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "text-red-600 bg-black px-3 py-1 rounded-lg underline underline-offset-4"
              : "text-black hover:text-red-600 hover:underline"
          }`}
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          to="/Contact"
          className={`${
            location.pathname === "/Contact"
              ? "text-red-600 bg-black px-3 py-1 rounded-lg underline underline-offset-4"
              : "text-black hover:text-red-600 hover:underline"
          }`}
        >
          CONTACT
        </Link>
      </li>
      {user?.role === "user" && (
        <li>
          <Link
            to="/UserDash"
            className={`${
              location.pathname === "/UserDash"
                ? "text-red-600 bg-black px-3 py-1 rounded-lg underline underline-offset-4"
                : "text-black hover:text-red-600 hover:underline"
            }`}
          >
            {user.name}
          </Link>
        </li>
      )}
      {user?.role === "user" && (
        <li>
          <Link
            to="/Booking"
            className={`${
              location.pathname === "/Booking"
                ? "text-red-600 bg-black px-3 py-1 rounded-lg underline underline-offset-4"
                : "text-black hover:text-red-600 hover:underline"
            }`}
          >
            Booking
          </Link>
        </li>
      )}
      {user?.role === "admin" && (
        <li>
          <Link
            to="/AdminDash"
            className={`${
              location.pathname === "/AdminDash"
                ? "text-red-600 bg-black px-3 py-1 rounded-lg  underline underline-offset-4"
                : "text-black hover:text-red-600 hover:underline"
            }`}
          >
            Admin
          </Link>
        </li>
      )}
    </ul>
  );

  return (
    <nav className="bg-gradient-to-r from-white via-gray-700 to-black z-50 sticky top-0">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center py-3 lg:px-3">
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className="font-bold text-black text-2xl text-center">
              BookMyGas
            </h2>
          </Link>
        </div>

        <div
          className={`right ${isMobileMenuOpen ? "block" : "hidden"} lg:block`}
        >
          {navList}
        </div>

        <div className="flex items-center px-5 space-x-4 font-medium">
          {!user ? (
            <Link to={"/Login"}>
              <Button className="bg-red-800 hover:bg-red-400 text-lg">
                Login
              </Button>
            </Link>
          ) : (
            ""
          )}
          {user && (
            <Button
              className="bg-red-800 hover:bg-red-400 text-lg"
              onClick={logout}
            >
              LogOut
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
