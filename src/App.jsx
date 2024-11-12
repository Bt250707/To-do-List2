import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskListComponent/TaskListComponent";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const trimmedTask = task.trim();
    if (trimmedTask && !tasks.some((t) => t.task === trimmedTask))
      setTasks([...tasks, { task: trimmedTask, state: "todo" }]);
    else alert("Task already exists or is empty!");

	setInput("");
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => task.state !== "done"));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-row">
        <input
          type="text"
          id="inputbox"
          placeholder="Add a task"
		  value={input}
		  onChange={(e)=>setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask(input)}
        />
        <button
          onClick={() => addTask(document.getElementById("inputbox").value)}
        >
          Add
        </button>
      </div>
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <div className="clear-container">
        <button className="clear" onClick={clearCompletedTasks}>
          Clear all Completed Tasks
        </button>
      </div>
    </div>
  );
}

export default App;
