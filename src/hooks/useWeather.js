import { useState, useEffect } from "react";
import axios from "axios";
import {
  WEATHER_API_BASE_URL,
  WEATHER_API_KEY,
} from "../constants/apiConstants";
import useDebounce from "./useDebounce";
const useWeather = (location) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const debouncedLocation = useDebounce(location, 500);

  const fetchWeather = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${WEATHER_API_BASE_URL}/weather?q=${location}&appid=${WEATHER_API_KEY}&units=${"metric"}`
      );
      setWeatherData(response.data);
      setError(null);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
console.log("31error",error)
  useEffect(() => {
    if (debouncedLocation) {
      fetchWeather();
    }
  }, [debouncedLocation]);

  return { weatherData, loading, error };
};

export default useWeather;
