// src/context/WidgetContext.js
import React, { createContext, useState } from 'react';

export const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  const [isWeatherVisible, setIsWeatherVisible] = useState(false);
  const [isTodoVisible, setIsTodoVisible] = useState(false);
  const [isDashboardVisible, setIsDashboardVisible] = useState(true);
  const toggleWeather = () => {
    setIsWeatherVisible(true);
    setIsTodoVisible(false);
    setIsDashboardVisible(false);
  };
  const toggleDashboardHome = () => {
    setIsDashboardVisible(true);
    setIsWeatherVisible(false);
    setIsTodoVisible(false);
  };
  const toggleTodo = () => {
    setIsTodoVisible(true);
    setIsWeatherVisible(false);
    setIsDashboardVisible(false);
  };

  return (
    <WidgetContext.Provider
      value={{ isWeatherVisible, isTodoVisible, isDashboardVisible, toggleWeather, toggleTodo, toggleDashboardHome }}
    >
      {children}
    </WidgetContext.Provider>
  );
};
