import React from 'react';
import TaskInput from '../Components/TaskInput';
import TaskList from '../Components/TaskList';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const name = useSelector((state) => state.auth.user.name);

  return (
    <div className="p-4 md:p-8 lg:p-12 text-center">
      {isAuthenticated ? (
        <>
          <h2 className="text-3xl font-bold mb-4">Welcome {name} to your Dashboard</h2>
          <p className="text-gray-600 mb-6">Add Your Tasks Here..</p>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <p className="text-red-500">You are not authenticated!</p>
      )}
    </div>
  );
};

export default Dashboard;
