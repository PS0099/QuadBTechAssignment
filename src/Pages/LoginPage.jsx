import React from 'react';
import AuthForm from '../Components/AuthForm';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Slices/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = ({ token, user }) => {
    dispatch(login({ token, user }));
  };

  return <AuthForm onLogin={handleLogin} />; // ✅ this line is required
};

export default LoginPage;
