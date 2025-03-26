import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from "./Components/Header"
import AuthForm from "./Components/AuthForm"
import Dashboard from "./Pages/Dashbord"
import store from './Redux/store';
import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Routes>
            <Route path="/login" element={<AuthForm />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;