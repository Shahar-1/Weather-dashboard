// src/components/WeatherWidget.js
import React from 'react';
import thundersky from '../assets/thundersky.png';
const WidgetCard1 = () => {
  return (
    <div>
      <div className="row d-flex justify-content-center py-5">
        <div className="col-10">
          <div className="card text-body rounded-5">
            <div className="card-body p-4">
              <div className="d-flex">
                <h6 className="flex-grow-1">Warsaw</h6>
                <h6>15:07</h6>
              </div>

              <div className="d-flex flex-column text-center mt-5 mb-4">
                <h6 className="display-4 mb-0 font-weight-bold">13°C</h6>
                <span className="small" style={{ color: '#868B94' }}>
                  Stormy
                </span>
              </div>

              <div className="d-flex align-items-center">
                <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                  <div>
                    <i className="fas fa-wind fa-fw" style={{ color: '#868B94' }}></i>
                    <span className="ms-1">40 km/h</span>
                  </div>
                  <div>
                    <i className="fas fa-tint fa-fw" style={{ color: '#868B94' }}></i>
                    <span className="ms-1">84%</span>
                  </div>
                  <div>
                    <i className="fas fa-sun fa-fw" style={{ color: '#868B94' }}></i>
                    <span className="ms-1">0.2h</span>
                  </div>
                </div>
                <div>
                  <img
                    src={thundersky}
                    width="60rem"
                    alt="Weather Illustration" // Added alt attribute for accessibility
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard1;
