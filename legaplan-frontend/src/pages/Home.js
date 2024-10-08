import Header from './../components/Header/header';
import TaskCard from '../components/TaskCard/TaskCard';
import useTaskData from '../hooks/useTaskData';

const Home = () => {
    const { tasks, toggleComplete, addTask, deleteTask } = useTaskData();

    return (
      <div className="app">
        <Header userName="Marcus" currentDate="Segunda, 01 de dezembro de 2025" />
        <TaskCard tasks={tasks} onToggleComplete={toggleComplete} onAddTask={addTask}  onDeleteTask={deleteTask} />
      </div>
    );
}

export default Home;