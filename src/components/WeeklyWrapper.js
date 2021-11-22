import React, { useState, useEffect } from "react";
import CurrentDayWrapper from "./CurrentDay/CurrentDayWrapper";
import { getWeather } from "../api";
import { CITIES } from "../consts/cities";
import DayWrapper from "./Day/DayWrapper";

function WeeklyWrapper() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    getWeather(CITIES.spb)
      .then((res) => res.json())
      .then(
        (result) => {
          setResult(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  const { daily, hourly } = result;

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        <CurrentDayWrapper weatherArray={hourly} />
        <DayWrapper weatherArray={daily} />
      </div>
    );
  }
}

export default WeeklyWrapper;
