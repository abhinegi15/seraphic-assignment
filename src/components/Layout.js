import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from 'assets/logo.png';
import Button from "components/Button";
import NavItem from "components/NavItem";

const Layout = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  // lan btn
  const [activeLang, setActiveLang] = React.useState('EN');

    const handleClick = (lang) => {
        setActiveLang(lang);
    };

  return (
    <>
      <nav className="py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="col-md-8 d-flex align-items-center justify-content-end">
              <ul className="d-flex gap-3  p-0 align-items-center">
              <NavItem path="/" title='Home' />
              <NavItem path="/profile-shared" title='Profile Shared' />
              <NavItem  path="/rent-details" title='Rent Details' />

                <div className="lan-btn d-flex ">
                  <Button 
                      text='EN'
                      onClick={() => handleClick('EN')}
                      active={activeLang == 'EN'}
                   />
                   <Button 
                      text='ES'
                      onClick={() => handleClick('ES')}
                      active={activeLang == 'ES'}
                   />
                </div>
              </ul>

              <div className="dropdown ps-4">
                <div className="dropdown-toggler" onClick={toggleDropdown}>
                  <button className="dropdown-toggle-custom">
                    CL
                  </button>
                  <i className="fa-solid fa-angle-down" />
                </div>

                {isOpen && (
                  <div className="dropdown-menu-custom">
                    <NavLink to="/rent-details" className={({ isActive }) => (isActive ? "active" : "")}>
                      Home
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
