import "./Button.scss";

const Button = ({ onClick, label, children, disabled }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
  {label || children} 
  </button>
);
export default Button;
