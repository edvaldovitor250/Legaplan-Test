export interface AddTaskModalProps {
    visible: boolean;
    onClose: () => void;
    onAddTask: () => void; // Adicione esta linha
    newTaskText: string;
    setNewTaskText: React.Dispatch<React.SetStateAction<string>>;
  }