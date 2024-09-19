import '../../styles/Button.scss';

const Button = ({ children, onClick }) => {
  return (
    <button className="add-task-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
