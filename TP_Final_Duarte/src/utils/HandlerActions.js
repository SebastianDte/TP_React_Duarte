export const addTask = (newTask, taskInLocalStorage, setTasks) => {
    
    const taskWithNameExists = taskInLocalStorage.some(task => task.name === newTask.name);
  
    if (taskWithNameExists) {
      
      alert('Ya existe una tarea con ese Nombre.')
      return;
    }
  
    
    const updatedTasks = [...taskInLocalStorage, newTask];
    window.localStorage.setItem("TASK", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

export const completeTask = (taskId,tasks,setTasks) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
      
    );
  
    window.localStorage.setItem("TASK", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };
  
export const deleteTask = (taskId,tasks,setTasks) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
  
    window.localStorage.setItem("TASK", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

export const handlerClear = (setTasks) => {
    console.log("Se borro todo")
    window.localStorage.removeItem("TASK");
    setTasks([]);
  };