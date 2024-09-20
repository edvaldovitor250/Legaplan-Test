import { useState, useEffect } from 'react';

const useTaskData = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Lavar as mãos', completed: false },
    { id: 2, text: 'Fazer um bolo', completed: false },
    { id: 3, text: 'Lavar a louça', completed: false },
    { id: 4, text: 'Levar o lixo para fora', completed: true },
  ]);
  
  const [completedTasksMessage, setCompletedTasksMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    const hasCompletedTasks = tasks.some(task => task.completed);
    if (hasCompletedTasks) {
      setCompletedTasksMessage('Tarefas finalizadas');
    } else {
      setCompletedTasksMessage('');
    }
  }, [tasks]);

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    const newTask = { id: tasks.length + 1, text: 'Nova tarefa', completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleDeleteClick = (taskId) => {
    setTaskToDelete(taskId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    deleteTask(taskToDelete);
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  return { 
    tasks, 
    completedTasksMessage, 
    isModalOpen, 
    handleDeleteClick, 
    confirmDelete, 
    cancelDelete, 
    toggleComplete, 
    addTask 
  };
};

export default useTaskData;
