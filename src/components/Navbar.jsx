import { Link, NavLink } from "react-router-dom";

import useAuth from "../hooks/useAuth";

import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-500 font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <a href="#services">
          Services
        </a>
      </li>

      <li>
        <NavLink
          to="/my-profile"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-500 font-bold"
              : ""
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm px-4 md:px-10 sticky top-0 z-50">
      {/* Navbar Start */}

      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow space-y-2"
          >
            {links}
          </ul>
        </div>

        <Link
          to="/"
          className="text-2xl font-bold text-cyan-500"
        >
          WarmPaws
        </Link>
      </div>

      {/* Navbar Center */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {links}
        </ul>
      </div>

      {/* Navbar End */}

      <div className="navbar-end gap-3">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                className="w-11 h-11 rounded-full border-2 border-cyan-400 object-cover"
                src={
                  user?.photoURL ||
                  "https://i.ibb.co.com/4pDNDk1/avatar.png"
                }
                alt="user"
              />
            </div>

            <button
              onClick={handleLogout}
              className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none"
            >
              Logout
            </button>
          </>
        ) : (
          <>
           <NavLink to="/login">
  {({ isActive }) => (
    <button
      className={`btn border-cyan-500 ${
        isActive
          ? "bg-cyan-500 text-white"
          : "btn-outline text-cyan-500 hover:bg-cyan-500 hover:text-white"
      }`}
    >
      Login
    </button>
  )}
</NavLink>

<NavLink to="/register">
  {({ isActive }) => (
    <button
      className={`btn border-none ${
        isActive
          ? "bg-cyan-700 text-white"
          : "bg-cyan-500 hover:bg-cyan-600 text-white"
      }`}
    >
      Register
    </button>
  )}
</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;