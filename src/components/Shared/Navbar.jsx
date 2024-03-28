import React from "react";

const Navbar = () => {
  return (
    <div className="pb-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h3 className="my-auto">Husmerk_Tech</h3>
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active mx-2"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link  mx-2" aria-current="page" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link  mx-2" aria-current="page" href="#">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link mx-2" aria-current="page" href="#">
                  Service
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link mx-2" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <a class="navbar-brand position-absolute pt-5 brand-img ps-3" href="#">
              <img
                src="/src/assets/img/logo_H.png"
                alt=""
                width="100"
                height="auto"
              />
          </a> */}
      </nav>
    </div>
  );
};

export default Navbar;
