import React from 'react';
import { useState, useContext } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/CustomNavBar.css';
import { WidgetContext } from '../context/WidgetContext';
import icon1 from '../assets/icon1.svg';
import toggleicon from '../assets/toggleicon.svg';
const DashboardNav = () => {
  const { toggleWeather, toggleTodo, toggleDashboardHome } = useContext(WidgetContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar className={`bg-color py-lg-2 py-0`} expand="lg">
        <NavbarBrand className="d-block d-lg-none">
          <div className={`h-100 align-items-center d-flex mx-2 `}>
            <img src={icon1} className={` rounded-circle mx-2`} />
            <span className={`text-color fw-bold `}>Skyway</span>
          </div>
        </NavbarBrand>

        <div onClick={toggle} className="ms-auto custom-toggler d-lg-none">
          <img src={toggleicon} alt="Toggle Navigation" className="toggle-icon" />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className={``} navbar>
            <NavItem>
              <input type="search" placeholder="Search" className={`form-control px-5  rounded-5 search-icon `} />
            </NavItem>
          </Nav>
          <Nav className={`fs-5 mx-3 ms-auto`} navbar>
            <NavItem className="d-lg-block d-none"></NavItem>

            <NavItem className="pt-md-2 text-color">
              <NavLink href="#" className="px-0 text-color fs-5 fw-bold ">
                Sign Out
              </NavLink>
            </NavItem>
            <NavItem className="pt-md-2 d-block d-lg-none">
              <NavLink className="text-color" onClick={toggleDashboardHome}>
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem className="pt-md-2 d-block d-lg-none">
              <NavLink className="text-color" onClick={toggleWeather}>
                Weather Check
              </NavLink>
            </NavItem>
            <NavItem className="pt-md-2 d-block d-lg-none ">
              <NavLink className="text-color" onClick={toggleTodo}>
                Todo Task
              </NavLink>
            </NavItem>
            <NavItem className="pt-md-2 d-block d-lg-none">
              <NavLink className="text-color">Menu</NavLink>
            </NavItem>
            <NavItem className="pt-md-2 d-block d-lg-none">
              <NavLink className="text-color">Messages</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default DashboardNav;
