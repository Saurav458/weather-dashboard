// src/api/weatherApi.js
import axios from "axios";
import {
  WEATHER_API_BASE_URL,
  WEATHER_API_KEY,
} from "../constants/apiConstants";

export const getWeatherData = async (location) => {
  const response = await axios.get(
    `${WEATHER_API_BASE_URL}/weather?q=${location}&appid=${WEATHER_API_KEY}&units=${"metric"}`
  );
  return response.data;
};
