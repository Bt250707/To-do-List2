import React from 'react';

function Task({ task, taskStates, onUpdate, onDelete }) {
  const handleStateChange = (e) => {
    onUpdate({ ...task, state: e.target.value });
  };

  return (
    <li>
      <span onClick={() => onUpdate({ ...task, task: prompt("Edit task:", task.task) || task.task })}>
        {task.task}
      </span>
      <select value={task.state} onChange={handleStateChange}>
        {taskStates.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <button onClick={onDelete}>Remove</button>
    </li>
  );
}

export default Task;
