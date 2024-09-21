import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/taskTypes';

const useTaskData = () => {
  const [tasks, setTasks] = useState<Task[]>(() => [
    { id: 1, text: 'Lavar as mãos', completed: false },
    { id: 2, text: 'Fazer um bolo', completed: false },
    { id: 3, text: 'Lavar a louça', completed: false },
    { id: 4, text: 'Levar o lixo para fora', completed: true },
  ]);
  const [completedTasksMessage, setCompletedTasksMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [newTaskText, setNewTaskText] = useState<string>('');
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    };
    saveTasks();
  }, [tasks]);

  useEffect(() => {
    const hasCompletedTasks = tasks.some(task => task.completed);
    setCompletedTasksMessage(hasCompletedTasks ? 'Tarefas finalizadas' : '');
  }, [tasks]);

  const toggleComplete = (taskId: number) => {
    setTasks(tasks.map((task) => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
    setIsAddTaskModalOpen(false);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleDeleteClick = (taskId: number) => {
    setTaskToDelete(taskId);
    Alert.alert(
      "Confirmar exclusão",
      "Você tem certeza que deseja excluir esta tarefa?",
      [
        { text: "Cancelar", onPress: () => setTaskToDelete(null), style: "cancel" },
        { text: "Excluir", onPress: () => confirmDelete(taskId) },
      ]
    );
  };

  const confirmDelete = (taskId: number) => {
    deleteTask(taskId);
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
    toggleComplete,
    addTask,
    setIsAddTaskModalOpen,
    setNewTaskText,
  };
};

export default useTaskData;
