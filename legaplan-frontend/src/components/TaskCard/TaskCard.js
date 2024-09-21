import "../../styles/TaskCard.scss";
import { Button as R } from '../shared/Button';
import useTaskData from '../../hooks/useTaskData';
import SVGIconDelete from "../../assets/SVG/SVGIconDelete";

const TaskCard = () => {
  const {
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
  } = useTaskData();

  const handleAddTask = () => {
    addTask(newTaskText);
  };

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
                  <SVGIconDelete />
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
                    <SVGIconDelete />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="button-container">
        <R onClick={() => setIsAddTaskModalOpen(true)}>
          Adicionar nova tarefa
        </R>
      </div>

      {isAddTaskModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h1>Adicionar nova tarefa</h1>
            <label>
              Titulo
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
              />
            </label>
            <div className="task-button">
              <button className="modal-btn cancel-btn" onClick={() => setIsAddTaskModalOpen(false)}>Cancelar</button>
              <button className="modal-btn add-btn" onClick={handleAddTask}>Adicionar</button>
            </div>
          </div>
        </div>
      )}

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
