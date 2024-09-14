import { FC } from "react";
import NcImage from "../NcImage/NcImage";
import BtnLikeIcon from "../BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "../SaleOffBadge/SaleOffBadge";
import Badge from "../Badge/Badge";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { formatCurrency } from "../../utils";
import { icons } from "../../assets/images";

export interface CarCardProps {
  className?: string;
  data?: any;
  size?: "default" | "small";
}

const CarCard: FC<CarCardProps> = ({
  size = "default",
  className = "",
  data = [],
}) => {
  const {
    featuredImage,
    title,
    like,
    saleOff,
    isAds,
    price,
    reviewCount,
    seats,
    gearshift,
    address,
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden p-2">
        <div className="aspect-w-16 aspect-h-9 ">
          <NcImage
            containerClassName="flex items-center justify-center rounded-2xl"
            className="w-full"
            src={featuredImage}
          />
        </div>
        <BtnLikeIcon
          isLiked={like}
          className="absolute right-3 top-3 z-[1] bg-[#F5F5F5] text-[#434E58]"
        />
        {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "p-5  space-y-4" : "p-3  space-y-2"}>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            {isAds && <Badge name="ADS" color="green" />}
            <h2
              className={`  capitalize ${
                size === "default"
                  ? "text-xl font-semibold"
                  : "text-base font-medium"
              }`}
            >
              <span className="line-clamp-1">{title}</span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2 justify-between">
            <div className="flex flex-row items-center">
              <img src={icons.carSeatIcon} alt="" />
              <span className="text-[12px] text-[#8C8C8C]">{seats}</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={icons.carVoLangIcon} alt="" />
              <span className="text-[12px] text-[#8C8C8C]">{gearshift}</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={icons.starIcon} alt="" />
              <span className="text-[12px] text-[#8C8C8C]">{reviewCount}</span>
            </div>
          </div>
        </div>
        <div className="w-full  border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex flex-row items-center">
          <CiLocationOn color="#868A8D" />
          <p className="text-[12px] text-[#868A8D]">{address}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">
            {formatCurrency(price)}
            {` `}
            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
              /ngày
            </span>
          </span>
          {/* <StartRating reviewCount={reviewCount} point={reviewStart} /> */}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-CarCard group relative border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden hover:shadow-xl transition-shadow bg-white dark:bg-neutral-900 will-change-transform ${className}`}
      data-nc-id="CarCard"
    >
      <Link to={"car-detail"} className="flex flex-col">
        {renderSliderGallery()}
        {renderContent()}
      </Link>
    </div>
  );
};

export default CarCard;
