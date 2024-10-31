// src/components/Sidebar.js
import React, { useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';
import { MenuApp, AppIndicator, Mailbox, CloudSun, CheckSquare } from 'react-bootstrap-icons';
import { Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import icon1 from '../assets/icon1.svg';

const Sidebar = () => {
  const { toggleWeather, toggleTodo, toggleDashboardHome } = useContext(WidgetContext);

  return (
    <>
      <div className={`bg-color text-center h-100`}>
        <NavbarBrand href="#" className="m-5">
          <div className={`pt-3`}>
            <img src={icon1} className={`rounded-circle mx-3`} alt="Logo" />
            <div>
              <span className={`text-color fw-bold fs-5`}>Skyway</span>
            </div>
          </div>
        </NavbarBrand>
        <Nav vertical className="mt-5">
          <NavItem className="my-3" onClick={toggleDashboardHome}>
            <NavLink>
              <button className="btn rounded-circle">
                <AppIndicator fill="grey" width={30} height={30} title="App" />
              </button>
              <div className=" mt-1 text-color text-color">Dashboard</div> {/* Label for AppIndicator */}
            </NavLink>
          </NavItem>
          <NavItem className="my-3">
            <NavLink onClick={toggleWeather}>
              <button className="btn rounded-circle">
                <CloudSun width={30} fill="grey" height={30} title="Weather" />
              </button>
              <div className=" mt-1 text-color"> Weather Check</div> {/* Label for Person */}
            </NavLink>
          </NavItem>
          <NavItem className="my-3">
            <NavLink onClick={toggleTodo}>
              <button className="btn rounded-circle">
                <CheckSquare fill="grey" width={30} height={30} title="Folder" />
              </button>
              <div className=" mt-1 text-color">Todo Tasks</div> {/* Label for Folder */}
            </NavLink>
          </NavItem>
          <NavItem className="my-3">
            <NavLink href="#">
              <button className="btn rounded-circle">
                <MenuApp fill="grey" width={30} height={30} title="App Menu" />
              </button>
              <div className=" mt-1 text-color">Menu</div> {/* Label for MenuApp */}
            </NavLink>
          </NavItem>

          <NavItem className="my-3">
            <NavLink>
              <button className="btn rounded-circle">
                <Mailbox fill="grey" width={30} height={30} title="Mailbox" />
              </button>
              <div className=" mt-1 text-color">Messages</div> {/* Label for Mailbox */}
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
