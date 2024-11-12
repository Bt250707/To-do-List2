import React from 'react';
import Task from '../TaskComponent/TaskComponent';

function TaskList({ tasks, updateTask, deleteTask }) {
  const taskStates = ['todo', 'in-progress', 'done'];

  return (
    <ul id="list-container">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          taskStates={taskStates}
          onUpdate={(updatedTask) => updateTask(index, updatedTask)}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
