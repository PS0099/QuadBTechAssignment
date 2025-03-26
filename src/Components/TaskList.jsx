import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../Redux/Slices/taskSlice";
import { fetchWeather } from "../Redux/Slices/weatherSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const priorityMap = {
    high: 1,
    medium: 2,
    low: 3,
  };

  const outdoorKeywords = ["drive", "fishing", "hiking", "park", "walk", "run"];

  const isOutdoorTask = (text) => {
    return outdoorKeywords.some((keyword) =>
      text.toLowerCase().includes(keyword)
    );
  };

  useEffect(() => {
    const hasOutdoor = tasks.some((task) => isOutdoorTask(task.text));
    if (hasOutdoor) {
      dispatch(fetchWeather("Mumbai")); // You can change city dynamically later
    }
  }, [tasks, dispatch]);

  const sortedTasks = [...tasks].sort((a, b) => {
    const aPriority = a.priority?.toLowerCase?.() || "low";
    const bPriority = b.priority?.toLowerCase?.() || "low";
    return priorityMap[aPriority] - priorityMap[bPriority];
  });

  return (
    <div className="max-w-xl mx-auto">
      {sortedTasks.length === 0 ? (
        <p className="text-gray-600 text-center">No tasks added yet.</p>
      ) : (
        <ul className="space-y-2">
          {sortedTasks.map((task) => (
            <li
              key={task.id}
              className="bg-white p-4 rounded shadow flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-between w-[60%]">
                  <p className="font-semibold">{task.text}</p>
                  <span
                    className={`text-[10px] px-2 py-1 rounded ${
                      task.priority?.toLowerCase() === "high"
                        ? "bg-red-100 text-red-700"
                        : task.priority?.toLowerCase() === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {task.priority} Priority
                  </span>
                </div>
                <button
                  onClick={() => dispatch(removeTask(task.id))}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>

              {isOutdoorTask(task.text) && weather.temp && (
                <div className="text-sm text-blue-700 bg-blue-100 p-2 rounded">
                  Weather: {weather.temp}°C, {weather.description}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
