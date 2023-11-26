// TaskList.jsx
import React from 'react';
import './TaskList.css'; // Importar el archivo de estilos

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <span className={task.completed ? 'completed' : ''}>{task.name}</span>
          <button onClick={() => completeTask(task.id)}>Completar</button>
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

