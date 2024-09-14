import classNames from "classnames";

const TitleWithBorder = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={classNames(className, "flex flex-row items-center gap-1")}>
      <div className="w-[4px] h-[19px] bg-mainColor rounded-2xl" />
      <p className="font-semibold text-[20px]">{title}</p>
    </div>
  );
};

export default TitleWithBorder;
