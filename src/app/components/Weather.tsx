"use client";
import { useState, useEffect } from 'react';

// Define a type for the weather data
interface WeatherData {
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
    weather: {
      description: string;
      icon: string;
    };
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
          throw new Error('City not found');
        }
        return response.json();
      })
      .then((data) => setWeatherData(data))
      .catch((error) => setError('City not found'));
  };

  return (
    <div className="bg-gradient-to-r text-black dark:text-black from-blue-500 via-blue-400 to-blue-300 h-screen flex flex-col items-center justify-center">
  <div className="m-12 text-white p-4 md:p-6 w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
    <h2 className="text-3xl md:text-6xl dark:text-black text-center font-semibold my-4">Weather App</h2>
    <div className="flex flex-col md:flex-row justify-between items-center space-x-2 my-4">
      <input
        className="text-black border px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 md:px-4 md:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 my-4"
        onClick={fetchWeatherData}
      >
        Get
      </button>
    </div>
    {error && <p className="text-red-500 text-bold mb-4">{error}</p>}
    {weatherData && (
      <div>
        <h3 className="flex justify-center items-start text-2xl md:text-3xl font-semibold mb-2">
          {weatherData.name}, {weatherData.sys.country}
        </h3>
        <div className="flex flex-row justify-between items-center my-4 rounded-md border-2">
          <p className="text-3xl md:text-4xl font-bold mx-2">
            {weatherData.main?.temp}°C
          </p>
          <div className='flex flex-col justify-between md:text-xl text-md my-2 mx-2'>
          <p>Min. temp {weatherData.main?.temp_min}°C</p>
          <p>Max. temp {weatherData.main?.temp_max}°C</p>
          </div>      
        </div>
        <div className='flex flex-col justify-between items-start md:text-xl text-md'>
          <p>Visibility - {weatherData.visibility} m</p>
          <p >Pressure - {weatherData.main?.pressure} Pa</p>
          <p>TimeZone (GMT): {Math.round(weatherData.timezone/3600) - 1   + "" + (((weatherData.timezone) % 3600)/3600)*60}</p>
          <p >Humidity - {weatherData.main?.humidity} %</p>
          <p >Wind - {weatherData.wind?.deg}°</p>
          <p >Speed - {weatherData.wind?.speed} miles/hr</p>
        </div> 
      </div>
    )}
  </div>
</div>


  );
};

export default Weather;





