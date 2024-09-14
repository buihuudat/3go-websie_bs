import classNames from "classnames";

interface ITitle {
  title: string;
  className?: string;
}

const Title = ({ title, className }: ITitle) => {
  return (
    <div
      className={classNames(
        "text-2xl md:text-[30px] xl:text-[38px] text-titleColor font-semibold",
        className
      )}
    >
      {title}
    </div>
  );
};

export default Title;
