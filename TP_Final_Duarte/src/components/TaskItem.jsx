// TaskItem.jsx
import React from 'react';

const TaskItem = ({ task, completeTask, deleteTask }) => {
  const handleComplete = () => {
    completeTask(task.id, !task.completed); 
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      {task.name}
      <button onClick={handleComplete}>Completar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
