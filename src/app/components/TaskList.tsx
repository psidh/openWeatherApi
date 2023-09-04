// components/TaskList.js
import React from 'react';
// Define a type or interface for the props
interface TaskListProps {
  tasks: {
    name: string;
    completed: boolean;
  }[]; // This assumes your tasks array has an array of objects with 'name' and 'completed' properties
  deleteTask: (index: number) => void;
  toggleComplete: (index: number) => void;
}


const TaskList: React.FC<TaskListProps>  = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="flex items-center justify-between mx-4">
  <ul className="mt-4">
    {tasks.map((task, index) => (
      <li key={index} className="flex items-center justify-between py-3 px-4 border my-2 rounded-md border-gray-700">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(index)}
            className="h-6 w-6 text-blue-500 border border-gray-200 rounded-full"
          />
          <span
            className={`px-2 sm:px-4 text-md sm:text-2xl divide-y dark:text-white ${
              task.completed ? 'line-through text-gray-400' : 'text-black'
            }`}
          >
            {task.name}
          </span>
        </div>
        <button
          onClick={() => deleteTask(index)}
          className=" bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md text-gray-200 hover:text-gray-300 focus:outline-none"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>


  );
};

export default TaskList;
