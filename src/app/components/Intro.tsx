// pages/index.js
"use client";
import React, { useState } from 'react';

export default function Intro() {
  const [tasks, setTasks] = useState([]);

  // Add, edit, and delete task functions will go here

  return (
    <div className="container mx-auto p-8 text-justify relative">
  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
    Welcome to Task Tracker
  </h1>
  <p className="text-lg  mb-6">
    Stay organized and productive with our task tracking app. Manage your tasks efficiently and never miss a deadline.
  </p>
  <div className="flex items-center space-x-4">
    <a href="/about" className="dark:text-teal-300 text-teal-600 hover:underline">
      Learn More
    </a>
  </div>
  
</div>


  );
}
