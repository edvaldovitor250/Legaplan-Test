import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import SVGIconDelete from '../assets/SVG/SVGIconDelete';
import useTaskData from './../hooks/useTaskData';
import AddTaskModal from './AddTaskModal'; // Importe o AddTaskModal

const TaskCard = () => {
  const {
    tasks,
    newTaskText,
    setNewTaskText,
    toggleComplete,
    addTask,
    handleDeleteClick,
  } = useTaskData();

  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [completedTasksMessageVisible, setCompletedTasksMessageVisible] = useState(false);

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      handleDeleteClick(taskToDelete);
      setTaskToDelete(null);
    }
    setIsDeleteTaskModalOpen(false);
  };

  const handleComplete = (taskId: number) => {
    toggleComplete(taskId);
    const task = tasks.find(t => t.id === taskId);
    if (task && !task.completed) {
      setCompletedTasksMessageVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Suas tarefas de hoje</Text>
        <FlatList
          data={tasks.filter(task => !task.completed)}
          keyExtractor={task => task.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <TouchableOpacity onPress={() => handleComplete(item.id)} style={styles.checkbox}>
                <Text style={item.completed ? styles.completedCheckbox : styles.checkboxText}>
                  {item.completed ? '☑️' : '☐'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleComplete(item.id)} style={styles.taskTextContainer}>
                <Text style={item.completed ? styles.completedTask : styles.taskText}>
                  {item.text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setTaskToDelete(item.id);
                setIsDeleteTaskModalOpen(true);
              }} accessibilityLabel="Deletar tarefa">
                <SVGIconDelete onPress={() => {}} />
              </TouchableOpacity>
            </View>
          )}
        />
        {completedTasksMessageVisible && <Text style={styles.completedTasksMessage}>Tarefas finalizadas!</Text>}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => setIsAddTaskModalOpen(true)} accessibilityLabel="Adicionar nova tarefa">
        <Text style={styles.addButtonText}>Adicionar nova tarefa</Text>
      </TouchableOpacity>

      {/* Modal para adicionar tarefa */}
      <AddTaskModal
        visible={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onAddTask={() => {
          addTask(newTaskText); // Adiciona a tarefa
          setNewTaskText(''); // Limpa o texto
          setIsAddTaskModalOpen(false); // Fecha o modal
        }}
        newTaskText={newTaskText}
        setNewTaskText={setNewTaskText}
      />

      {/* Modal para deletar tarefa */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDeleteTaskModalOpen}
        onRequestClose={() => setIsDeleteTaskModalOpen(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Deletar tarefa</Text>
            <Text>Tem certeza que você deseja deletar essa tarefa?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setIsDeleteTaskModalOpen(false)} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={confirmDelete} style={styles.addButton}>
                <Text style={styles.buttonText}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Inter Tight',
    color: '#333',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 24,
  },
  completedCheckbox: {
    fontSize: 24,
    color: 'green',
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
  completedTask: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  completedTasksMessage: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Inter Tight',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column', // Mudado para coluna
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10, // Adicionado espaçamento entre os botões
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default TaskCard;
