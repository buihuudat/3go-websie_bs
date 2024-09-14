import { FaChevronRight } from "react-icons/fa";
import { reportIcon, securityIcon } from "../../../assets/images/svgImage";
import { formatCurrency } from "../../../utils";
import TitleWithBorder from "../../common/TitleWithBorder";
import FormPay from "./FormPay";
import DetailSecurity from "./DetailSecurity";
import { Link } from "react-router-dom";

const CarDetailPay = () => {
  return (
    <div className="col-span-6 md:col-span-3 m-3 md:m-0 xl:col-span-2 flex flex-col items-center ">
      <div
        className="rounded-lg border border-[#FEFEFE] px-5 py-8 flex flex-col gap-3"
        style={{
          boxShadow: "0px 0px 4px 0px rgba(194, 194, 194, 0.50",
          height: "max-content",
        }}
      >
        <div className="flex flex-row items-center justify-between">
          <p className="line-through text-[#868A8D] font-semibold">
            {formatCurrency(1500)}/ngày
          </p>
          <div className="flex flex-row items-end">
            <span className="text-[#0C3958] text-4xl">
              {formatCurrency(1500)}
            </span>
            <span className="text-[18px] text-[#868A8D]">/ngày</span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="text-mainColor flex flex-row">
            {securityIcon}
            <span>Bảo hiểm thuê xe</span>
          </div>
          <FaChevronRight className="text-mainColor w-4 h-4" />
        </div>

        <TitleWithBorder title="Thời gian thuê xe" />

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start border border-gray-400 px-5 w-[170px] rounded-full">
            <p className="text-sm text-[#868A8D] font-semibold">Nhận xe</p>
            <span className="text-secondGreen text-xs font-semibold">
              21h00 T4, 24/05/2024
            </span>
          </div>

          <div className="flex flex-col items-start border border-gray-400 px-5 w-[170px] rounded-full">
            <p className="text-sm text-[#868A8D] font-semibold">Trả xe</p>
            <span className="text-secondGreen text-xs font-semibold">
              21h00 T5, 25/05/2024
            </span>
          </div>
        </div>

        <hr />

        <FormPay />
      </div>
      <DetailSecurity />

      <Link to={"/"} className="flex flex-row gap-2">
        {reportIcon}
        <p className="underline font-semibold text-subTextColor">Báo cáo xe</p>
      </Link>
    </div>
  );
};

export default CarDetailPay;
