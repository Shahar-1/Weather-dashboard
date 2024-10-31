// src/components/HourlyWeatherWidget.js
import React from 'react';
import sunicon from '../assets/sunicon.svg';
import cloudicon from '../assets/cloudicon.svg';

const Widgetcard2 = () => {
  const hourlyData = [
    { time: '1PM', temp: '20°', icon: sunicon },
    { time: '2PM', temp: '21°', icon: sunicon },
    { time: '3PM', temp: '20°', icon: sunicon },
  ];

  return (
    <div className="row d-flex justify-content-center py-5">
      <div className="col-10 card card-colour-outer rounded-5">
        <div className="fw-medium mx-2 mt-3 fs-4">Today / Week</div>
        <div className="fw-medium mx-2 mt-3 fs-6">Monday :</div>
        <div className="d-flex justify-content-center ">
          {hourlyData.map((data, index) => (
            <div className="hourly-weather-card mt-2" key={index}>
              <p className="hourly-time">{data.time}</p>
              <img src={data.icon} alt="Weather Icon" className="weather-icon" />
              <p className="hourly-temp">{data.temp}</p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end mx-3">
          <img
            src={cloudicon}
            width="60rem"
            alt="Weather Illustration" // Added alt attribute for accessibility
          />
        </div>
      </div>
    </div>
  );
};

export default Widgetcard2;
