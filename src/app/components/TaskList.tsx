// components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul className="mt-4">
  {tasks.map((task, index) => (
    <li key={index} className="flex items-center justify-between py-3 border-b border-gray-300">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(index)}
          className="h-6 w-6 text-blue-500 border border-gray-300 rounded"
        />
        <span
          className={`px-8 text-2xl dark:text-white  ${task.completed ? 'line-through text-gray-400' : 'text-black'}`}
        >
          {task.name}
        </span>
      </div>
      <button
        onClick={() => deleteTask(index)}
        className="mx-4 text-red-500 hover:text-red-600 focus:outline-none"
      >
        Delete
      </button>
    </li>
  ))}
</ul>

  );
};

export default TaskList;
