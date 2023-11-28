// App.jsx
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { ButtonAction } from './components/ButtonAction';
import {handlerClear } from './utils/HandlerActions';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const taskInLocalStorage = JSON.parse(window.localStorage.getItem("TASK")) || [];

  useEffect(() => {
    if (taskInLocalStorage.length > 0) {
      setTasks(taskInLocalStorage);
    }
  }, []);
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm taskName={taskName} setTaskName ={setTaskName} dataLocalStorage={taskInLocalStorage} setTask={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks}  />
      {tasks.length>1?<ButtonAction handleAction={()=>handlerClear(setTasks)} description="Limpiar Tareas"/>:null}
    </div>
  );
}

export default App

  
    

  

 

