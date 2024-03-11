import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

const Header = (props) => {

    const headerNav = [
        {
            name: "Coworking Space",
            url: "/"
        },
        {
            name: "Coliving",
            url: "/"
        }
    ]

  return (
    <header className="main_header sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={props.Logo} className="img-fluid" alt="" />
          </Link>
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
            <ul className="navbar-nav m-auto">
                {headerNav.map((navItem) =>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={navItem.url}>
                            {navItem.name}
                        </Link>
                    </li>
                )}
              
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                    Coliving 
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
            <div className="header_btn">
                <Link to="/" className="site_btn">Request Call Back</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
