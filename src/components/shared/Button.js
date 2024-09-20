import '../../styles/Button.scss';

export const Button = ({ children, onClick }) => {
  return (
    <button className="add-task-btn" onClick={onClick}>
      {children}
    </button>
  );
};


