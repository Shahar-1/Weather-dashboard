// src/components/WeatherWidget.js
import React from 'react';
import sunicon2 from '../assets/sunicon2.svg';
const WidgetCard3 = () => {
  return (
    <div>
      <div className="row d-flex justify-content-center py-5">
        <div className="col-10">
          <div className="card text-body fw-medium rounded-5">
            <div className="card-body p-4">
              <div className="d-flex  text-body">
                <img
                  src={sunicon2}
                  width="60rem"
                  alt="Weather Illustration" // Added alt attribute for accessibility
                />
                <div className="m-4">Dubai - 20°C </div>
              </div>
              <div className="d-flex text-body">
                <img
                  src={sunicon2}
                  width="60rem"
                  alt="Weather Illustration" // Added alt attribute for accessibility
                />
                <div className="m-4">London - 20°C </div>
              </div>
              <div className="d-flex text-body">
                <img
                  src={sunicon2}
                  width="60rem"
                  alt="Weather Illustration" // Added alt attribute for accessibility
                />
                <div className="m-4">Dubai - 20°C </div>
              </div>
              <div className="d-flex text-body">
                <img
                  src={sunicon2}
                  width="60rem"
                  alt="Weather Illustration" // Added alt attribute for accessibility
                />
                <div className="m-4">USA - 20°C </div>
              </div>
              <div className="d-flex text-body">
                <img
                  src={sunicon2}
                  width="60rem"
                  alt="Weather Illustration" // Added alt attribute for accessibility
                />
                <div className="m-4">UAE - 20°C </div>
              </div>
              <div className="d-flex text-body">
                <img
                  src={sunicon2}
                  width="60rem"
                  alt="Weather Illustration" // Added alt attribute for accessibility
                />
                <div className="m-4">Chennai - 20°C </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard3;
