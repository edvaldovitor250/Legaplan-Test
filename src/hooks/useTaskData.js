import { useState } from 'react';

const useTaskData = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Lavar as mãos', completed: false },
    { id: 2, text: 'Fazer um bolo', completed: false },
    { id: 3, text: 'Lavar a louça', completed: false },
    { id: 4, text: 'Levar o lixo para fora', completed: true },
  ]);

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    const newTask = { id: tasks.length + 1, text: 'Nova tarefa', completed: false };
    setTasks([...tasks, newTask]);
  };

  return { tasks, toggleComplete, addTask };
};

export default useTaskData;
