import "./Button.css";

export const Button = ({ button }) => {
  return (
    <button>
      <span className="button">
        <a href="#">{button}</a>
      </span>
    </button>
  );
};
