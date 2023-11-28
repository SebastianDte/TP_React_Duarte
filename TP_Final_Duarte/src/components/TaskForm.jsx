// TaskForm.jsx
import React, { useState } from 'react';
import './TaskForm.css'; 
import { ButtonAction } from './ButtonAction';
import { addTask } from '../utils/HandlerActions';

const TaskForm = ({ taskName, setTaskName,dataLocalStorage,setTask }) => {

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (!taskName.trim()) {
      return; 
    }
    addTask({ id: Date.now(), name: taskName, completed: false },dataLocalStorage,setTask);
    setTaskName('');
  };

  return (
    <div className="task-form">
      <input type="text" value={taskName} onChange={handleInputChange} />
      
      <ButtonAction handleAction={handleAddTask} description="Agregar Tarea"/>
    </div>
  );
};

export default TaskForm;
