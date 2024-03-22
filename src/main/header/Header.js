import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const navItems = [
    { label: 'Coworking Space', dropdown: true, items: [
      {
        label: "Coworking space in Golf Course Road Gurgaon",
        href: "/coworking-space-on-golf-course-road",
      },
      {
        label: "Coworking space on Golf Course Extn. Road Gurgaon",
        href: "/",
      },
      {
        label: "Coworking Space in MG Road Gurgaon",
        href: "/",
      },
      {
        label: "Coworking Space in Sohna Road Gurgaon",
        href: "/",
      },
      {
        label: "Coworking space in DLF Cyber City",
        href: "/",
      },
      {
        label: "Co-working space in Udyog Vihar Gurgaon",
        href: "/",
      },
      {
        label: "Coworking space in NH-8 Gurgaon",
        href: "/",
      },
      {
        label: "Co-working space in Sector 32",
        href: "/",
      },
      {
        label: "Coworking Space near Metro Stations",
        href: "/",
      },
      {
        label: "Coworking space in Gurgaon",
        href: "/",
      },
    ]},
    { label: 'Office Space', dropdown: true, items: [
      {
        label: "Office Space in Golf Course Road Gurgaon",
        href: "/gurgaon/commercial-office-space-in-golf-course-road-gurgaon",
      },
      {
        label: "Office Space on Golf Course Extn. Road Gurgaon",
        href: "/",
      },
      {
        label: "Office Space in MG Road Gurgaon",
        href: "/",
      },
      {
        label: "Office Space in Sohna Road Gurgaon",
        href: "/",
      },
      {
        label: "Office Space in DLF Cyber City",
        href: "/",
      },
      {
        label: "Office Space in Udyog Vihar Gurgaon",
        href: "/",
      },
      {
        label: "Office Space in NH-8 Gurgaon",
        href: "/",
      },
      {
        label: "Office Space in Sector 32",
        href: "/",
      },
      {
        label: "Office Space near Metro Stations",
        href: "/",
      },
      {
        label: "Office Space in Gurgaon",
        href: "/",
      },
    ]},
    // { label: 'Coliving', dropdown: true, items: [
    //   {
    //     label: "Coliving in Bangalore",
    //     href: "/",
    //   },
    //   {
    //     label: "Coliving in Gurgaon",
    //     href: "/",
    //   },
    //   {
    //     label: "Coliving in Hyderabad",
    //     href: "/",
    //   },
    //   {
    //     label: "Coliving in Pune",
    //     href: "/",
    //   },
    //   {
    //     label: "Coliving in Indore",
    //     href: "/",
    //   },
    //   {
    //     label: "Coliving in Mumbai",
    //     href: "/",
    //   },
    //   {
    //     label: "Coliving in Noida",
    //     href: "/",
    //   },
    //   {
    //     label: "Coliving in Delhi",
    //     href: "/",
    //   }
    // ]},
  ];


  return (
    <header className="main_header sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={props.Logo} className="img-fluid" alt="Alexandro" />
          </Link>
          <button onClick={handleNavCollapse}
            className="navbar-toggler"
            type="button"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              {navItems.map((item, index) => (
                <li key={index} className={`nav-item ${item.dropdown ? 'dropdown' : ''}`}>
                  {item.dropdown ? (
                    <React.Fragment>
                      <Link className="nav-link dropdown-toggle" to={item.href} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {item.label}
                      </Link>
                      <ul className="dropdown-menu">
                        {item.items.map((dropdownItem, dropdownIndex) => (
                          <li key={dropdownIndex}><Link className="dropdown-item" to={dropdownItem.href}>{dropdownItem.label}</Link></li>
                        ))}
                      </ul>
                    </React.Fragment>
                  ) : (
                    <Link className={`nav-link ${item.active ? 'active' : ''}`} to={item.href} aria-current={item.active ? 'page' : undefined}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="header_btn">
              <Link to="/" className="site_btn">
                Request Call Back
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
