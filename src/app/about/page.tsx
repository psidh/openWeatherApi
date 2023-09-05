/* eslint-disable @next/next/no-page-custom-font */
"use client";
import Image from 'next/image';
import styled, { createGlobalStyle } from "styled-components";
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ambit';
    src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
  }
`;
export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (<div style={{ fontFamily: 'Ambit, sans-serif' }} className="text-black dark:text-black bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
  <div className="font-Ambit text-white dark:text-white">
    <GlobalStyle />
  <Navbar />
    </div>
    <div className="container mx-auto px-4 md:px-8 py-8 text-justify ">
  <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white  mb-4">
    About Weather App
  </h1>
  <p className="text-xl text-white mb-6">
    Weather App is a user-friendly application that provides real-time weather information for any location around the world. With Weather App, you can stay informed about current weather conditions and forecasts, making it easier to plan your day.
  </p>
  <ul className="list-disc text-lg list-inside text-white mb-6 pl-4">
    <li>Get up-to-date weather data for your desired city.</li>
    <li>Check the temperature, weather description, and more.</li>
    <li>Plan your outdoor activities based on accurate weather forecasts.</li>
    <li>Access weather information from anywhere, at any time.</li>
    <li>Stay prepared for any weather conditions.</li>
  </ul>
  <h2 className="text-2xl font-semibold text-white dark:text-white mb-4">Technology Stack</h2>
  <p className="text-lg text-white mb-6">
    Weather App is built using modern technologies to deliver reliable and up-to-date weather data:
  </p>
  <ul className="list-disc text-lg list-inside text-white mb-6 pl-4">
    <li>Frontend: React with Next.js for a responsive user interface.</li>
    <li>Backend: Integration with the OpenWeatherMap API to fetch weather data.</li>
  </ul>
  <h2 className="text-2xl font-semibold text-white dark:text-white mb-4">How to Use</h2>
  <p className="text-lg text-white dark:text-white mb-6">
    Start using Weather App to stay informed about weather conditions in your area or any location of your choice:
  </p>
  <ol className="list-decimal list-inside text-lg text-white dark:text-white mb-6 pl-4">
    <li>Enter the city name in the search box.</li>
    <li>Click the "Get Weather" button to fetch the latest weather data.</li>
    <li>View temperature, weather description, and other details on the results page.</li>
    <li>Plan your activities accordingly based on the weather forecast.</li>
  </ol>
  <p className="text-lg text-white dark:text-white mb-6">
    Weather App is your reliable companion for weather information. Stay ahead of the weather and make informed decisions with Weather App today!
  </p>
</div>
<div className='text-white dark:text-white'>
  <Footer />
  </div>
</div>


  );
}




