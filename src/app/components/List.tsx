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
  <ul className="my-4 space-y-4">
    {tasks.map((task, index) => (
      <li
        key={index}
        className="bg-white p-4 border shadow-md rounded-lg hover:shadow-lg mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
              className={`h-6 w-6 text-white border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-400 ${
                task.completed
                  ? 'bg-yellow-500 border-yellow-500'
                  : 'bg-gray-200 border-gray-200'
              }`}
            />
            <div className="flex flex-col">
              {editMode === index ? (
                <input
                  type="text"
                  value={editedTaskName}
                  onChange={(e) => setEditedTaskName(e.target.value)}
                  className="dark:bg-black rounded-lg border border-gray-300 text-base p-1 dark:text-white focus:ring focus:ring-blue-500"
                />
              ) : (
                <span
                  className={`text-base ${
                    task.completed ? 'line-through text-gray-400' : 'text-black'
                  }`}
                >
                  {task.name}
                </span>
              )}
            </div>
          </div>
          <div className="space-x-2 mt-2 sm:mt-0 flex flex-row sm:flex-row">
            {editMode === index ? (
              <button
                onClick={() => handleSaveClick(index)}
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md hover:text-gray-300 focus:outline-none mb-2 sm:mb-0"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEditClick(index, task.name)}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md hover:text-gray-300 focus:outline-none mb-2 sm:mb-0"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => deleteTask(index)}
              className="text-sm bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md hover:text-gray-300 focus:outline-none mb-2 sm:mb-0"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>








  
);
};

export default TaskList;