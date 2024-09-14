import { useState } from "react";
import { infoIcon, securityIcon } from "../../../assets/images/svgImage";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { formatCurrency } from "../../../utils";
import classNames from "classnames";

const DetailSecurity = () => {
  const [isShow, setIsShow] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="bg-[#F5F5F5] p-5 my-4 rounded-lg w-full">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          {securityIcon}
          <span>Bảo hiểm tùy chọn (không bắt buộc)</span>
        </div>
        <button onClick={() => setIsShow(!isShow)}>
          {isShow ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div className={classNames("mt-5", !isShow && "hidden")}>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <p className="text-sm">Bảo hiểm nội thất</p>
              <button>{infoIcon}</button>
            </div>
            <span className="font-bold text-[#8CC542]">
              {formatCurrency(30000)}/ngày
            </span>
          </div>
          <div className="round">
            <input type="checkbox" checked id="checkbox" />
            <label htmlFor="checkbox"></label>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <p className="text-sm">Bảo hiểm ngoại thất</p>
              <button>{infoIcon}</button>
            </div>
            <span className="font-bold text-[#8CC542]">
              {formatCurrency(30000)}/ngày
            </span>
          </div>
          <div className="round" onClick={() => setIsChecked(!isChecked)}>
            <input type="checkbox" checked={isChecked} id="checkbox" />
            <label htmlFor="checkbox"></label>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <p className="text-sm">Bảo hiểm Premium</p>
              <button>{infoIcon}</button>
            </div>
            <span className="font-bold text-[#8CC542]">
              {formatCurrency(30000)}/ngày
            </span>
          </div>
          <div className="round">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox"></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSecurity;
