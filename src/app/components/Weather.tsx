"use client";
import { useState } from 'react';

// Define a type for the weather data
interface WeatherData {
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
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
    <div className="bg-gradient-to-r text-black dark:text-black from-blue-500 via-blue-400 to-blue-300 min-h-screen flex flex-col items-center justify-center">
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
    <h2 className="text-3xl dark:text-black text-center font-semibold my-4">Weather App</h2>
    <div className="flex flex-col md:flex-row justify-center items-center space-x-2 my-4">
      <input
        className="text-black border p-2 rounded-md w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 my-4"
        onClick={fetchWeatherData}
      >
        Get Weather
      </button>
    </div>
    {error && <p className="text-red-500 text-bold mb-4">{error}</p>}
    {weatherData && (
      <div>
        <h3 className="flex justify-center items-center text-2xl md:text-3xl font-semibold mb-2">
          Weather in {weatherData.name}, {weatherData.sys.country}
        </h3>
        <div className="flex justify-center items-center">
          <p className="text-xl font-bold mr-4">
            {weatherData.main?.temp}°C
          </p>
          <p className="text-lg">{weatherData.weather?.[0]?.description}</p>
        </div>
      </div>
    )}
  </div>
</div>


  );
};

export default Weather;
