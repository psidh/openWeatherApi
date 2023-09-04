"use client";
// components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
  <input
    type="text"
    placeholder="Add Task"
    value={task}
    onChange={(e) => setTask(e.target.value)}
    className="dark:bg-black py-2 px-4 rounded-l border border-gray-300"
  />
  <h1></h1>
  <button type="submit" className="my-4 py-2 px-6 hover:bg-teal-600 bg-teal-500 text-white rounded-lg">
    Add
  </button>
</form>

  );
};

export default TaskForm;
