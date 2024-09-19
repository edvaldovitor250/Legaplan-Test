import React from 'react';
import "../../styles/TaskCard.scss"

const TaskCard = ({ tasks, onToggleComplete, onAddTask }) => {
  return (
    <div className="task-card">
      <h2>Suas tarefas de hoje</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />
            {task.text}
            <button className="delete-btn">🗑️</button>
          </li>
        ))}
      </ul>
      <button className="add-task-btn" onClick={onAddTask}>
        Adicionar nova tarefa
      </button>
    </div>
  );
};

export default TaskCard;
