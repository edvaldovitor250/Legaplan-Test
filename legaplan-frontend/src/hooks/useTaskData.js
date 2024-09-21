import { useState, useEffect } from 'react';

const useTaskData = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: 'Lavar as mãos', completed: false },
      { id: 2, text: 'Fazer um bolo', completed: false },
      { id: 3, text: 'Lavar a louça', completed: false },
      { id: 4, text: 'Levar o lixo para fora', completed: true },
    ];
  });

  const [completedTasksMessage, setCompletedTasksMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [newTaskText, setNewTaskText] = useState('');
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    const hasCompletedTasks = tasks.some(task => task.completed);
    setCompletedTasksMessage(hasCompletedTasks ? 'Tarefas finalizadas' : '');
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
    setIsAddTaskModalOpen(false);
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
    isAddTaskModalOpen,
    newTaskText,
    handleDeleteClick,
    confirmDelete,
    cancelDelete,
    toggleComplete,
    addTask,
    setIsAddTaskModalOpen,
    setNewTaskText,
  };
};

export default useTaskData;
