import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const getWeatherIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <img
        className="icon"
        src={getWeatherIcon(weather.weather[0].icon)}
        alt={weather.weather[0].description}
      />
      <p className="description">{weather.weather[0].description}</p>
      <p className="temp">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
