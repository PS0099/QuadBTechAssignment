import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/Slices/taskSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');
  const dispatch = useDispatch();
  
  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ task:task, priority }));
      setTask('');
      setPriority('Low');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4 w-full max-w-xl mx-auto">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
        className="border rounded px-4 py-2 w-full"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border rounded px-2 py-2"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button
        onClick={handleAddTask}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;