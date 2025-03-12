import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-md" style={{ backgroundColor: "#1d4f74" }}>
        <Link className="navbar-brand" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block my-1" viewBox="0 0 118 94" role="img">
            <title>Logo</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM44 24a2 2 0 012-2h14a2 2 0 012 2v42h14a2 2 0 012 2v6a2 2 0 01-2 2H46a2 2 0 01-2-2V24z" fill="currentColor"></path>
          </svg>
        </Link>
        <h2>Abe Theresa Shaji Perincheril (24250837)</h2>
        <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#main-navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="main-navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  

export default Navbar;
