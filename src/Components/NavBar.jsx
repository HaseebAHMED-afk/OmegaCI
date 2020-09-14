import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <a className="navbar-brand" href="/">
          ΩmegaCI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/Documentation">
                Documentation
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/Pricing">
                Pricing
              </a>
            </li>
            <button className="btn btn-outline-success login">Log In</button>
            <button className="btn btn-outline-dark signup">Sign Up</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
