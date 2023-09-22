import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed-top">
      <nav class="navbar navbar-expand-md bg-white">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Doctors Portal
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink class="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/appointment">
                  Appointment
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/reviews">
                  Reviews
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
