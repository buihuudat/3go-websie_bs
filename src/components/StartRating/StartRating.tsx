import { FC } from "react";
import { FaStar } from "react-icons/fa";

export interface StartRatingProps {
  className?: string;
  point?: number;
  reviewCount?: number;
}

const StartRating: FC<StartRatingProps> = ({
  className = "",
  point = 4.5,
  reviewCount = 112,
}) => {
  return (
    <div
      className={`nc-StartRating flex items-center space-x-1 text-sm  ${className}`}
      data-nc-id="StartRating"
    >
      <div className="pb-[2px]">
        <FaStar className="w-[18px] h-[18px] text-orange-500" />
      </div>
      <span className="font-medium ">{point}</span>
      <span className="text-neutral-500 dark:text-neutral-400">
        ({reviewCount})
      </span>
    </div>
  );
};

export default StartRating;
