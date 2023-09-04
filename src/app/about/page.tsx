/* eslint-disable @next/next/no-page-custom-font */
"use client";
import Image from 'next/image';
import styled, { createGlobalStyle } from "styled-components";
import { useEffect, useState } from 'react';
const GlobalStyle = createGlobalStyle`;
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;
export default function About(){

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
<div style={{ fontFamily: 'Ambit, sans-serif' }} className="bg-white dark:bg-black">
  <div className="font-Ambit">
    <GlobalStyle />
  
    </div>
  <div className="container mx-auto px-4 md:px-8 py-8 text-justify ">
    <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-gray-800 mb-4">
      About Task Tracker
    </h1>
    <p className="text-xl dark:text-gray-300 text-gray-700 mb-6">
      Task Tracker is a user-friendly and efficient task management application designed to help you stay organized and boost your productivity. Here's why you'll love using Task Tracker:
    </p>
    <ul className="list-disc text-lg list-inside dark:text-gray-300 text-gray-700 mb-6 pl-4">
      <li>Effortlessly manage your tasks and to-do lists.</li>
      <li>Stay on top of your deadlines and never forget important tasks.</li>
      <li>Track your progress and complete tasks with satisfaction.</li>
      <li>Customize your tasks with due dates, priorities, and more.</li>
      <li>Access your tasks from any device with our responsive design.</li>
    </ul>
    <h2 className="text-2xl font-semibold dark:text-teal-400 text-teal-600 mb-4">Technology Stack</h2>
    <p className="text-lg dark:text-gray-300 text-gray-700 mb-6">
      Task Tracker is built using a modern technology stack, ensuring reliability and performance:
    </p>
    <ul className="list-disc text-lg list-inside dark:text-gray-300 text-gray-700 mb-6 pl-4">
      <li>Frontend: React with Next.js and Tailwind CSS.</li>
      <li>Backend: JSON Parser.</li>
    </ul>
    <h2 className="text-2xl font-semibold dark:text-teal-400 text-teal-600 mb-4">How to Use</h2>
    <p className="text-lg dark:text-gray-300  text-gray-700 mb-6">
      Getting started with Task Tracker is easy! Follow these simple steps to boost your productivity:
    </p>
    <ol className="list-decimal list-inside text-lg dark:text-gray-300 text-gray-700 mb-6 pl-4">
      <li>Add your tasks, and prioritize them.</li>
      <li>Mark tasks as completed when you finish them.</li>
      <li>Stay organized and enjoy a productive day!</li>
    </ol>
    <p className="text-lg dark:text-gray-300 text-gray-700 mb-6">
      Task Tracker is designed to help you manage your tasks efficiently and make your daily life more organized. Try it today and experience the difference!
    </p>
  </div>
</div>

  );
}
