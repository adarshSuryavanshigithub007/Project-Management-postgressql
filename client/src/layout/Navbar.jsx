import React, { useState } from "react";
import { Assets } from "../assets/Assets";
import { Link } from "react-router-dom"; // ✅ Corrected import

const Navbar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);

  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      {/* Full-Width Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <i
          className="bi bi-list text-white fs-4"
          style={{ cursor: "pointer" }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        ></i>

        <div className="ms-auto d-flex align-items-center">
          {/* Notification Bell with Badge */}
          <div className="position-relative me-3">
            <i className="bi bi-bell text-white fs-5" style={{ cursor: "pointer" }}></i>
            {notifications > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {notifications}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Main Layout: Sidebar + Content */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div
          className={`bg-light border-end d-flex flex-column ${isSidebarOpen ? "d-block" : "d-none d-md-block"}`}
          style={{
            width: isSidebarOpen ? "250px" : "60px",
            transition: "width 0.3s",
            height: "100%",
            position: "relative",
          }}
        >
          <ul className="list-unstyled p-3 flex-grow-1">
            <li className="mb-3">
              <Link to="/dashboard" className="text-decoration-none d-flex align-items-center text-dark">
                <i className="bi bi-grid me-2"></i> {isSidebarOpen && "Dashboard"}
              </Link>
            </li>
            
          </ul>

          {/* Profile Section at Bottom */}
          <div className="p-3 border-top bg-light d-flex align-items-center position-relative">
            <img
              src={Assets.avatar}
              alt="User"
              className="rounded-circle me-2"
              width="30"
              height="30"
              style={{ cursor: "pointer" }}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
            {isSidebarOpen && (
              <span style={{ cursor: "pointer" }} onClick={() => setIsProfileOpen(!isProfileOpen)}>
                Dennis Nedry
              </span>
            )}

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="position-absolute bg-white shadow rounded py-2 mt-2" style={{ bottom: "100%", left: 0, minWidth: "150px" }}>
                <a href="#" className="d-block px-3 py-2 text-dark text-decoration-none">Profile</a>
                <a href="#" className="d-block px-3 py-2 text-dark text-decoration-none">Logout</a>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4" style={{ transition: "margin-left 0.3s" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
