import "./Button.css";
import "../Styles/Animation.css";
export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="btn">
      <p>{children}</p>
    </button>
  );
}
