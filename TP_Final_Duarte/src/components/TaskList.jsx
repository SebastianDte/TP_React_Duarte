// TaskList.jsx
import React from 'react';
import './TaskList.css'; 
import { completeTask, deleteTask } from '../utils/HandlerActions';

const TaskList = ({ tasks,setTasks}) => {
  return (
    <ul className="task-list">
      {tasks.length > 0 ? tasks.map((task) => (
        <li key={task.id}>
          <span className={task.completed ? 'completed' : ''}>{task.name}</span>
          <button onClick={() => completeTask(task.id,tasks,setTasks)}>Completar</button>
          <button onClick={() => deleteTask(task.id,tasks,setTasks)}>Eliminar</button>
        </li>
      )):<p>Sin Tareas</p>}
    </ul>
  );
};

export default TaskList;

