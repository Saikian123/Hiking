import { useState } from "react";
import './Task9.css'; // Import the external CSS file

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask("");
  };

  // Remove a task by index
  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
           {setNewTask(e.target.value)}
          } }
          placeholder="Enter a new task"
          className="input"
        />
        <button onClick={handleAddTask} className="add-button">
          Add Task
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className="no-task-message">No tasks added yet!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-text">{task}</span>
              <button
                onClick={() => handleRemoveTask(index)}
                className="remove-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;
