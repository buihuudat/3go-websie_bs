import { FaHeart } from "react-icons/fa";
import CarType from "./CarType";
import { carType1, carType2 } from "../../../assets/data";
import TitleWithBorder from "../../common/TitleWithBorder";
import CarDetailMap from "./CarDetailMap";
import CarDetailReview from "./CarDetailReview";
import {
  addressIcon,
  linkIcon,
  shareIcon,
  volang,
} from "../../../assets/images/svgImage";
import StartRating from "../../StartRating/StartRating";

const CarDetailInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="space-y-3">
        <p className="text-3xl md:text-[36px] font-semibold text-center md:text-start">
          Mitsubishi XPANDER 2022
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-row gap-5 md:gap-2 items-center">
            <div className="flex flex-row gap-1 items-center">
              {addressIcon}
              <span>Tạ Hiện, Quận 2</span>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <StartRating />
              <span>4.5</span>
            </div>
            <div className="flex flex-row gap-1 items-center">
              {volang}
              <span>50+ chuyến</span>
            </div>
          </div>
          <div className="flex flex-row gap-5 md:gap-3 items-center my-3">
            <button>{linkIcon}</button>
            <button>{shareIcon}</button>
            <button>
              <FaHeart color="red" />
            </button>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3 py-3">
          <CarType title="Đặc điểm" data={carType1} />
          <CarType title="Tiện nghi" data={carType2} />
        </div>
      </div>
      <div>
        <TitleWithBorder title="Mô tả" className="mb-3" />
        <span className="font-semibold text-[#868A8D]">
          Xe nhà sử dụng đời mới, 8 chỗ ngồi rộng rãi, số tự động tiết kiệm xăng
          nhất phân khúc, ngoại thất đẹp và nội thất bọc da sạch sẽ. Xe có
          camera hành trình, cruise control, gương gập điện, cảm biến và camera
          lùi, đầu android có bản đồ Vietmap dẫn đường, kết nối bluetooth.{" "}
        </span>
      </div>
      <CarDetailMap />
      <CarDetailReview />
    </div>
  );
};

export default CarDetailInfo;
