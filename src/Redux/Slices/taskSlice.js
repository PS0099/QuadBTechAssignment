import { createSlice } from '@reduxjs/toolkit';

// Helper to get current user email from localStorage
const getUserEmail = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.email || null;
  } catch {
    return null;
  }
};

const loadFromLocalStorage = () => {
  const email = getUserEmail();
  if (!email) return [];
  try {
    const tasks = localStorage.getItem(`tasks_${email}`);
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};

const saveToLocalStorage = (tasks) => {
  const email = getUserEmail();
  if (!email) return;
  try {
    localStorage.setItem(`tasks_${email}`, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: loadFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload.task,
        priority: action.payload.priority,
      };
      state.push(newTask);
      saveToLocalStorage(state);
    },
    removeTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
