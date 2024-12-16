import React, { useState } from "react";
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: task,
        date: new Date().toLocaleDateString(),
      };
      setTasks([...tasks, newTask]);
      setTask(""); // Clear input field
    }
  };

  const completeTask = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    setCompletedTasks([...completedTasks, taskToComplete]);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>To-do App</h1>
      <div className="task-input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-lists">
        <div className="task-list">
          <h2>Pending Tasks</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span>{task.text}</span>
                <span className="task-date">{task.date}</span>
                <div className="task-buttons">
                  <button onClick={() => completeTask(task.id)}>Complete</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="task-list completed">
          <h2>Completed Tasks</h2>
          <ul>
            {completedTasks.map((task) => (
              <li key={task.id}>
                <span>{task.text}</span>
                <span className="task-date">{task.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
