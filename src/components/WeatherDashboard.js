import React, { useState } from "react";
import useWeather from "../hooks/useWeather";
import WeatherCard from "./WeatherCard";

const WeatherDashboard = () => {
  const [location, setLocation] = useState("New York");
  const { weatherData, loading, error } = useWeather(location);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Enter location"
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
};

export default WeatherDashboard;
