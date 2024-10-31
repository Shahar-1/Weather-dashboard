// src/App.js
import React from 'react';
import { WidgetProvider } from './context/WidgetContext';
import './App.css'; // Custom styling for layout
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <WidgetProvider>
      <Dashboard />
    </WidgetProvider>
  );
};

export default App;
