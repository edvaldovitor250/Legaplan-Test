import React from 'react';
import "../../styles/TaskCard.scss";
import { Button as R } from '../shared/Button';
import useTaskData from '../../hooks/useTaskData';

const TaskCard = () => {
    const {
        tasks,
        completedTasksMessage,
        isModalOpen,
        handleDeleteClick,
        confirmDelete,
        cancelDelete,
        toggleComplete,
        addTask,
    } = useTaskData();

    return (
        <>
            <div className="task-card">
                <h2>Suas tarefas de hoje</h2>
                <ul>
                    {tasks
                        .filter(task => !task.completed)
                        .map((task) => (
                            <li key={task.id} className={task.completed ? 'completed' : ''}>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleComplete(task.id)}
                                />
                                {task.text}
                                <button className="delete-btn" onClick={() => handleDeleteClick(task.id)}>
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5H3M3 5H19M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V5H3ZM6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5" stroke="#B0BBD1" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </li>
                        ))}
                </ul>
                {completedTasksMessage && (
                    <div className="completed-tasks-section">
                        <h2 className="completed-tasks-message">{completedTasksMessage}</h2>
                        <ul>
                            {tasks.filter(task => task.completed).map((task) => (
                                <li key={task.id} className="completed">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleComplete(task.id)}
                                    />
                                    {task.text}
                                    <button className="delete-btn" onClick={() => handleDeleteClick(task.id)}>
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5H3M3 5H19M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V5H3ZM6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5" stroke="#B0BBD1" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="button-container">
                <R onClick={addTask}>
                    Adicionar nova tarefa
                </R>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h1>Deletar tarefa</h1>
                        <p>Tem certeza que você deseja deletar essa tarefa?</p>
                        <div className="button-container"> 
                            <button className="modal-btn cancel-btn" onClick={cancelDelete}>Cancelar</button>
                            <button className="modal-btn delete-btn" onClick={confirmDelete}>Deletar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TaskCard;
