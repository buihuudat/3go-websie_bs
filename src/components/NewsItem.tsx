import { MdOutlineCalendarMonth } from "react-icons/md";
import NcImage from "./NcImage/NcImage";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { INewsData } from "../assets/data";

const NewsItem = ({ item }: { item: INewsData }) => {
  return (
    <div className="w-full border border-gray-300 rounded-lg">
      <NcImage src={item?.image} />
      <div className="px-4">
        <div className="flex flex-row items-center py-4">
          <MdOutlineCalendarMonth color="#868A8D" />
          <span className="text-[#868A8D] text-[12px] md:text-sm">
            {item?.createdAt}
          </span>
        </div>
        <p className="text-xl md:text-[24px] font-semibold pb-1">
          {item?.title}
        </p>
        <p className="text-[#868A8D] text-sm md:text-[18px]">{item?.content}</p>

        <Link to={"/"} className="py-5 flex flex-row gap-2 items-center ">
          <span className="text-[#0C3958] font-semibold text-sm md:text-xl">
            Xem thêm
          </span>
          <FaArrowRight color="#0C3958" />
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
