/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from 'react';

// Define a type for the weather data
interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    }
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    wind: {
        deg: number,
        speed: number,
    };
    weather: [{
      icon: string,
      main: string,
    }];
    timezone: number;
    visibility: number;
  }
  

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Access the API key from your .env file

  const fetchWeatherData = () => {
    setError("");

    // Check if the user has entered a city
    if (!city) {
      setError('Please enter a city.');
      return;
    }

    // Fetch weather data
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('City not found ! 🥲 , try the latest name');
        }
        return response.json();
      })
      .then((data) => setWeatherData(data))
      .catch((error) => setError('City not found ! 🥲 , try the latest name'));
  };

  return (
    <div className="bg-gradient-to-r pt-4 md:pt-16 text-black dark:text-black from-blue-500 via-blue-400 to-blue-300 flex flex-col items-center justify-center ">
  <div className="bg-white md:m-4 mt-2 md:mt-4 mb-2 md:mb-4 md:rounded-lg dark:text-black p-2 md:p-4 w-full md:w-11/12 lg:w-10/12 xl:w-2/3 ">
    <h2 className="text-xl md:text-3xl text-gray-800 text-center font-semibold my-2 md:my-4">Weather App</h2>
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-x-2 my-2 md:my-4">
      <input
        className="text-black border px-2 md:px-4 py-2 md:py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-900 text-white px-2 md:px-4 py-2 md:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 my-2 md:my-4"
        onClick={fetchWeatherData}
      >
        Get
      </button>
    </div>
    {error && <p className="text-center text-red-500 font-bold mb-2 md:mb-4">{error}</p>}
    {weatherData && (
      <div>
        <h3 className="flex flex-col justify-center items-center text-xl md:text-2xl font-semibold mb-2 md:mb-4">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}@2x.png`}
            alt="Weather Icon"
          />
          {weatherData.name}, {weatherData.sys.country}{' '}
          <span className="text-md md:text-lg text-gray-600 mx-2">
            {weatherData.weather[0]?.main}
          </span>
        </h3>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-2 my-2 md:my-4 rounded-md border border-gray-300">
          <p className="text-xl md:text-2xl font-bold my-2 mx-2">
            {weatherData.main?.temp}°C
          </p>
          <div className="flex flex-col justify-between text-md my-2 md:my-0 mx-2 space-y-2 md:space-y-0">
            <p>Min. temp {weatherData.main?.temp_min}°C</p>
            <p>Max. temp {weatherData.main?.temp_max}°C</p>
          </div>
        </div>
        <div className="flex flex-col text-md md:text-lg my-2 md:my-4">
          <div className="m-2 md:my-4 flex justify-between">
            <p className="font-bold text-blue-800">Visibility</p>
            <p>{(weatherData.visibility / 1000).toFixed(2)} km</p>
          </div>
          <div className="m-2 md:my-4 flex justify-between">
            <p className="font-bold text-blue-800">Pressure</p>
            <p>{weatherData.main?.pressure} Pa</p>
          </div>
          <div className="m-2 md:my-4 flex justify-between">
            <p className="font-bold text-blue-800">TimeZone (GMT)</p>
            <p>
              {Math.floor(weatherData.timezone / 3600)}
              {(weatherData.timezone % 3600) / 60 < 10 ? '0' : ''}
              {(weatherData.timezone % 3600) / 60}
            </p>
          </div>
          <div className="m-2 md:my-4 flex justify-between">
            <p className="font-bold text-blue-800">Humidity</p>
            <p>{weatherData.main?.humidity} %</p>
          </div>
          <div className="m-2 md:my-4 flex justify-between">
            <p className="font-bold text-blue-800">Wind</p>
            <p>{weatherData.wind?.deg}°</p>
          </div>
          <div className="m-2 md:my-4 flex justify-between">
            <p className="font-bold text-blue-800">Wind Speed</p>
            <p>{weatherData.wind?.speed} km/hr</p>
          </div>
          <div className="m-2 md:my-4 flex justify-between">
            <p className="font-bold text-blue-800">Latitude</p>
            <p>{weatherData.coord?.lat}°</p>
          </div>
          <div className="m-2 md:my-4 flex justify-between">
            <p className="font-bold text-blue-800">Longitude</p>
            <p>{weatherData.coord?.lon}°</p>
          </div>
        </div>
      </div>
    )}
  </div>
</div>


  );
};

export default Weather;





