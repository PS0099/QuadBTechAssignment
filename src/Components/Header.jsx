import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux'
import { logout } from '../Redux/Slices/authSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">React To-Do App</h1>
      {localStorage.getItem('isAuthenticated') && (
        <button
          onClick={handleLogout}
          className="bg-red-50 text-black px-4 py-2 rounded hover:bg-blue-100"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;