import classNames from "classnames";

interface ICarType {
  title: string;
  data: string[];
  className?: string;
}

const Item = ({ title, className }: { title: string; className?: string }) => (
  <div>
    <p className={classNames(className, "p-1 text-sm md:text-base")}>{title}</p>
  </div>
);

const CarType = (props: ICarType) => {
  const { title, data, className } = props;
  return (
    <div className="flex flex-row gap-2 md:gap-3 flex-wrap">
      <Item
        title={title}
        className={classNames(
          className,
          "bg-[#FEFFE1] font-semibold rounded-full px-2"
        )}
      />
      {data?.map((item, index) => (
        <Item
          key={index}
          title={item}
          className={classNames(
            className,
            "text-[14px] text-[#868A8D] bg-[#F5F5F5] rounded-full px-2"
          )}
        />
      ))}
    </div>
  );
};

export default CarType;
