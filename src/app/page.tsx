/* eslint-disable @next/next/no-page-custom-font */
"use client";
import Image from 'next/image'
import NavBar from './components/navbar'
import styled, { createGlobalStyle } from "styled-components";
import Footer from './components/footer';
import TaskForm from './components/taskForm';
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;
export default function Home() {
  const [tasks, setTasks] = useState<{ name: string; completed: boolean }[]>([]);


  useEffect(() => {
    // Load tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || 'null') || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName: string) => {
    const newTask: { name: string; completed: boolean } = { name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };
  

  const toggleComplete = (index: number) => {
    const updatedTasks: { name: string; completed: boolean }[] = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ fontFamily: 'Ambit, sans-serif'}} >
    <div className="bg-black font-Ambit">
    <GlobalStyle />  
    <NavBar />
    </div>
    <div className='flex flex-col items-center min-h-screen justify-center'>
      <h1 className='text-4xl md:text-6xl'>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
    <Footer />
    </div>
  );
}
