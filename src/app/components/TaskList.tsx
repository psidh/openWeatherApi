// components/TaskList.js
import React from 'react';
import { useState } from 'react';
// Define a type or interface for the props
interface TaskListProps {
  tasks: {
    name: string;
    completed: boolean;
  }[]; // This assumes your tasks array has an array of objects with 'name' and 'completed' properties
  deleteTask: (index: number) => void;
  toggleComplete: (index: number) => void;
  editTask: (index: number, editedTaskName: string) => void; 
}


const TaskList: React.FC<TaskListProps>  = ({ tasks, deleteTask, toggleComplete, editTask}) => {

  const [editMode, setEditMode] = useState<number | null>(null);
  const [editedTaskName, setEditedTaskName] = useState<string>('');

  const handleEditClick = (index: number, taskName: string) => {
    setEditMode(index);
    setEditedTaskName(taskName);
  };

  const handleSaveClick = (index: number) => {
    editTask(index, editedTaskName);
    setEditMode(null);
  };


  return ( 
    <div className="mx-4">
  <ul className="my-4">
    {tasks.map((task, index) => (
      <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 border-b my-4 rounded-md border-gray-700 space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(index)}
            className="h-6 w-6 text-blue-500 border border-gray-200 rounded-full"
          />
          {editMode === index ? (
            <input
              type="text"
              value={editedTaskName}
              onChange={(e) => setEditedTaskName(e.target.value)}
              className="dark:bg-black rounded-lg border border-gray-300 text-base sm:text-xl dark:text-white"
            />
          ) : (
            <span
              className={`text-base sm:text-xl divide-y dark:text-white ${
                task.completed ? 'line-through text-gray-400' : 'text-black'
              }`}
            >
              {task.name}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4 my-2 sm:mt-0">
          {editMode === index ? (
            <button onClick={() => handleSaveClick(index)} className="bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md text-gray-200 hover:text-gray-300 focus:outline-none text-base sm:text-lg">
              Save
            </button>
          ) : (
            <button onClick={() => handleEditClick(index, task.name)} className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded-md text-gray-200 hover:text-gray-300 focus:outline-none text-base sm:text-lg">
              Edit
            </button>
          )}
          <button
            onClick={() => deleteTask(index)}
            className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md text-gray-200 hover:text-gray-300 focus:outline-none text-base sm:text-lg"
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>


  
);
};

export default TaskList;