import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice.js';
import taskReducer from './Slices/taskSlice.js';
import weatherReducer from './Slices/weatherSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    weather: weatherReducer,
  }
});

export default store;