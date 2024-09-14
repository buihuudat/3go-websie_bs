import classNames from "classnames";

interface ITitleSmall {
  title: string;
  className?: string;
}

const TitleSmall = ({ title, className }: ITitleSmall) => {
  return (
    <span
      className={classNames(
        className,
        "bg-subColor rounded-full py-2 px-10  text-sm md:text-[20px] xl:text-xl text-mainColor font-semibold"
      )}
      style={{ width: "max-content" }}
    >
      {title}
    </span>
  );
};

export default TitleSmall;
