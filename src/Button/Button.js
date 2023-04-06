import "./Button.css";

export const Button = ({ button }) => {
  return (
    <button>
      <span>
        <a href="#">{button}</a>
      </span>
    </button>
  );
};
