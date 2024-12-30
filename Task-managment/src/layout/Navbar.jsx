import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  text-white">
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Navbar brand */}
        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="15"
            alt="MDB Logo"
            loading="lazy"
          />
        </Link>

        {/* Navbar toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assignprojects">
                Assign Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/board">
                Board
              </Link>
            </li>
          </ul>
        </div>
        {/* Right elements */}
        <div className="d-flex align-items-center">
          {/* Shopping Cart Icon */}
          <Link className="link-secondary me-3" to="#">
            <i className="fas fa-shopping-cart"></i>
          </Link>

          {/* Notifications */}
          <div className="dropdown">
            <Link
              className="link-secondary me-3 d-flex align-items-centere hidden-arrow"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="position-relative">
                <i className="bi bi-bell" style={{ fontSize: "1.5rem" }}></i>{" "}
                {/* Bell icon */}
                {/* Notification Badge */}
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle p-1">
                  3
                </span>
              </div>
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link className="dropdown-item" to="#">
                  Some news
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Another news
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
          {/* Avatar Dropdown */}
          <div className="dropdown">
            <Link
              className=" d-flex align-items-center hidden-arrow"
              to="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Avatar"
                loading="lazy"
              />
            </Link>
            {/* Dropdown Menu */}
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <Link className="dropdown-item" to="#">
                  My profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
