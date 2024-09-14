import classNames from "classnames";

interface IButton {
  content: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ content, onClick, className }: IButton) => {
  return (
    <button
      className={classNames(
        className,
        "text-white bg-titleColor px-10 py-3 rounded-full"
      )}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
