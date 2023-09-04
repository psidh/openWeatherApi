import React, { useState } from 'react';

// Define a type or interface for the props
interface TaskFormProps {
  addTask: (task: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>(''); // Specify the type for 'task' as 'string'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Use React.FormEvent<HTMLFormElement> for the event type
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} // Use React.ChangeEvent<HTMLInputElement> for the event type
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
