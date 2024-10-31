// src/components/WeatherWidget.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const WeatherWidget = () => {
  const [location, setLocation] = useState('Trivandrum'); // Default location
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = '2f01e3ca5d66832c14d95a1166b3856c';

  // Fetch weather data based on the specified location
  const fetchWeather = async (location) => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    setWeather(null); // Clear previous weather data
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data); // Set the weather data
    } catch (error) {
      setError('Failed to fetch weather data. Please check the location.'); // Handle errors
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch weather data when the component mounts
  useEffect(() => {
    fetchWeather(location); // Fetch weather for default location
  }, []); // Empty dependency array ensures this runs once on mount

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (location.trim()) {
      fetchWeather(location.trim()); // Fetch weather for the trimmed location input
    } else {
      setError('Please enter a location.'); // Prompt if the input is empty
    }
  };

  return (
    <div className=" mt-5" style={{ overflowX: 'hidden' }}>
      <h2 className="text-center">Weather Widget</h2>
      <form onSubmit={handleSubmit} className="text-center mb-4">
        <div className="d-flex justify-content-center">
          <input
            type="text"
            value={location} // Controlled input
            onChange={(e) => setLocation(e.target.value)} // Update state on input change
            placeholder="Enter location"
            required // Ensure the input is required
            className="form-control me-2 w-50 input-shadow-custom"
          />
          <button type="submit" className="btn btn-primary weather-button">
            Get Weather
          </button>
        </div>
      </form>

      {/* Card to display weather data, loading and error messages */}
      <div className="card mx-auto" style={{ maxWidth: '20rem', width: '100%', overflowX: 'hidden' }}>
        <div className="card-body text-center align-content-center">
          {loading && (
            <>
              <Spinner animation="border" role="status" className="mb-2">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p>Loading...</p>
            </>
          )}
          {error && <p className="text-danger">{error}</p>}
          {weather && ( // Display weather data if available
            <>
              <h5 className="card-title">{weather.name}</h5>
              <p className="card-text">
                <strong>Temperature:</strong> {weather.main.temp} °C
              </p>
              <p className="card-text">
                <strong>Humidity:</strong> {weather.main.humidity}%
              </p>
              <p className="card-text">
                <strong>Condition:</strong> {weather.weather[0].description}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
