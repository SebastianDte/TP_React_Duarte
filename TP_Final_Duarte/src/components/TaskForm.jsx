// TaskForm.jsx
import React, { useState } from 'react';
import './TaskForm.css'; 

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (!taskName.trim()) {
      return; 
    }
    addTask({ id: Date.now(), name: taskName, completed: false });
    setTaskName('');
  };

  return (
    <div className="task-form">
      <input type="text" value={taskName} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Agregar Tarea</button>
    </div>
  );
};

export default TaskForm;
