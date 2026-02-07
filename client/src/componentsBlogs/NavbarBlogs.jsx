import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavbarBlogs.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-main">Farmer Fertilizer Mart</span>
          <span className="navbar__brand-sub">Blogs</span>
        </Link>

        <nav className="navbar__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `navbar__link ${isActive ? "navbar__link--active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/add"
            className={({ isActive }) =>
              `navbar__link navbar__link--primary ${
                isActive ? "navbar__link--active" : ""
              }`
            }
          >
            Add Blog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


