import { FaCheckCircle } from "react-icons/fa";
import { infoIcon, walletIcon } from "../../../assets/images/svgImage";
import { formatCurrency } from "../../../utils";
import { Link } from "react-router-dom";

const FormPay = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2 text-textColor">
        {walletIcon}
        <span>Chi tiết thanh toán</span>
      </div>

      <div className="flex flex-row items-center justify-between text-textColor">
        <span className="font-semibold">Đơn giá thuê</span>
        <span className="font-semibold">{formatCurrency(1500000)}/ngày</span>
      </div>
      <div className="flex flex-row items-center justify-between text-subTextColor">
        <div className="flex flex-row gap-3 items-center">
          <span className="font-semibold">Phí dịch vụ</span>
          <button>{infoIcon}</button>
        </div>
        <span className="font-semibold">{formatCurrency(77000)}/ngày</span>
      </div>
      <hr />
      <div className="flex flex-row items-center justify-between text-textColor">
        <span className="font-semibold">Tổng phí thuê xe</span>
        <span className="font-semibold">
          {formatCurrency(1500000)} x 1 ngày
        </span>
      </div>
      <div className="flex flex-row items-center justify-between text-subTextColor">
        <div className="flex flex-row gap-3 items-center">
          <span className="font-semibold">Bảo hiểm mặc định</span>
          <button>{infoIcon}</button>
        </div>
        <span className="font-semibold">{formatCurrency(30000)}/ngày</span>
      </div>
      <div className="flex flex-row items-center justify-between text-subTextColor">
        <div className="flex flex-row gap-3 items-center">
          <span className="font-semibold">Bảo hiểm tuỳ chọn</span>
          <button>{infoIcon}</button>
        </div>
        <span className="font-semibold">{formatCurrency(30000)}/ngày</span>
      </div>
      <div className="flex flex-row items-center justify-between text-subTextColor">
        <div className="flex flex-row gap-3 items-center">
          <span className="font-semibold">Ưu đãi</span>
          <button>{infoIcon}</button>
        </div>
        <span className="font-semibold">-{formatCurrency(40000)}</span>
      </div>
      <hr />
      <div className="flex flex-row items-center justify-between text-textColor">
        <span className="font-semibold">Thành tiền</span>
        <span className="font-semibold">{formatCurrency(1520000)}</span>
      </div>
      <div className="flex flex-row items-center justify-between text-[#0C3958]">
        <div className="flex flex-row gap-3 items-center">
          <span className="font-semibold">Phí dịch vụ</span>
          <button>{infoIcon}</button>
        </div>
        <span className="font-semibold">{formatCurrency(77000)}/ngày</span>
      </div>
      <hr />
      <div className="flex flex-row items-center justify-between text-textColor text-[20px]">
        <span className="font-semibold">Tổng thanh toán</span>
        <span className="font-semibold text-mainColor">
          {formatCurrency(3520000)}
        </span>
      </div>

      <div className="flex flex-row gap-3 items-center">
        <FaCheckCircle className="w-[24px] h-[24px] text-primaryColor" />
        <span className="text-subTextColor font-semibold">
          Tôi đồng ý với{" "}
          <Link to={"/"} className="text-mainColor underline">
            Chính sách hủy chuyến
          </Link>{" "}
          &{" "}
          <Link to={"/"} className="text-mainColor underline">
            Chi phí phát sinh
          </Link>
        </span>
      </div>

      <button className="w-full px-2 py-3 mt-2 bg-primaryColor font-semibold text-white rounded-full">
        Tải app để thuê xe ngay
      </button>
    </div>
  );
};

export default FormPay;
