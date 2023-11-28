// TaskItem.jsx
import React from 'react';
import { ButtonAction } from './ButtonAction';

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
      
      <ButtonAction handleAction={handleComplete} description="Completar"/>
      <ButtonAction handleAction={handleDelete} description="Eliminar"/>
      
    </li>
  );
};

export default TaskItem;
