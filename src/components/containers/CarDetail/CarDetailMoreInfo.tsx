import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { carMoreData } from "../../../assets/data";
import TitleWithBorder from "../../common/TitleWithBorder";
import { useState } from "react";
import classNames from "classnames";

const Item = ({ data }: { data: any }) => {
  const [isChange, setIsChange] = useState(true);
  return (
    <div className="bg-[#F5F5F5] w-full p-5 rounded-xl col-span-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-3">
          {data?.icon}
          <span className="text-[#8CC542]">{data?.title}</span>
        </div>
        <button onClick={() => setIsChange(!isChange)} className="px-3">
          {isChange ? (
            <FaChevronDown className="text-mainColor" />
          ) : (
            <FaChevronUp className="text-mainColor" />
          )}
        </button>
      </div>
      <div className={classNames(`mt-2`, isChange && "hidden")}>
        {data?.content?.map((item: any) => {
          return (
            <div>
              <ul className="text-[#868A8D] text-sm list-disc list-inside font-bold">
                {item?.ul}
                {item?.li?.map((i: string) => (
                  <li className="text-sm font-semibold text-[#868A8D]">{i}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CarDetailMoreInfo = () => {
  return (
    <div className="my-10">
      <TitleWithBorder title="Thông tin khác" className="mb-3" />

      <div className="flex flex-col gap-5">
        {carMoreData?.map((item, index) => {
          return <Item key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default CarDetailMoreInfo;
