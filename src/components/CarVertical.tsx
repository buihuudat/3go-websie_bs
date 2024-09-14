import { FaStar } from "react-icons/fa";
import { multiPeople } from "../assets/images/svgImage";
import { formatCurrency } from "../utils";
import NcImage from "./NcImage/NcImage";
import { useNavigate } from "react-router-dom";

const CarVertical = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-row items-center gap-5 p-3 rounded-lg border border-gray-100 relative w-full md:w-[600px] cursor-pointer"
      onClick={() => navigate("/car-detail")}
    >
      <NcImage
        src=""
        className="md:w-[167px] md:h-[147px] w-[140px] h-[120px] rounded-md"
      />
      <span className="absolute top-2 text-mainColor bg-[#EDFCFF] rounded-md px-3 py-1 text-xs font-semibold">
        Đang thuê
      </span>
      <div className="flex flex-col">
        <span className="bg-[#E8E8E8] rounded-full py-[2px] px-2 text-[9px] md:text-[10px] font-semibold w-max text-primaryColor">
          Số tự động
        </span>
        <span className="md:text-xl font-semibold line-clamp-1">
          Mitsubishi XPANDER 2022
        </span>

        <div className="flex flex-row items-center gap-10 mt-3">
          <div className="flex flex-row items-center gap-1">
            {multiPeople}
            <span className="font-semibold text-[#8C8C8C] text-sm">7 chỗ</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <FaStar color="yellow" />
            <span className="font-semibold text-[#8C8C8C] text-sm">4.5</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1">
          <span className="text-xl text-primaryColor font-semibold">
            {formatCurrency(1500)}
          </span>
          <span className="font-semibold text-gray-400">/ngày</span>
        </div>
      </div>
    </div>
  );
};

export default CarVertical;
