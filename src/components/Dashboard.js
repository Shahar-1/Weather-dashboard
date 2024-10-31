// src/components/Dashboard.js
import React, { useContext, useState } from 'react';
import { WidgetContext } from '../context/WidgetContext';
import Sidebar from './SideBar';
import WeatherWidget from './WeatherWidget';
import TodoListWidget from './TodoListWidget';
import DashboardHome from './DashboardHome';
import DashboardNav from './DashboardNavbar';

const Dashboard = () => {
  const { isWeatherVisible, isTodoVisible, isDashboardVisible } = useContext(WidgetContext);

  // State to control sidebar visibility on mobile screens
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <div className="d-flex mx-0">
        {/* Sidebar: Visible always on large screens, toggled on mobile */}
        <div className={` ${showSidebar ? 'show' : ''} d-lg-block d-none px-0`}>
          <Sidebar />
        </div>

        <div className="flex-fill px-0 body-height">
          {/* Navbar with toggle function passed as a prop */}
          <DashboardNav toggleSidebar={toggleSidebar} />

          {/* Widgets */}
          <div className="row mx-0">
            {isWeatherVisible && <WeatherWidget />}
            {isTodoVisible && <TodoListWidget />}
            {isDashboardVisible && <DashboardHome />}
          </div>
        </div>
      </div>

      {/* Mobile Overlay for Sidebar */}
      {showSidebar && (
        <div className="sidebar-overlay" onClick={toggleSidebar}>
          <Sidebar />
        </div>
      )}
    </>
  );
};

export default Dashboard;
