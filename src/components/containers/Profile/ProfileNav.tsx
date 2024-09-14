import { FaAngleRight } from "react-icons/fa";
import NcImage from "../../NcImage/NcImage";
import { navProfileData } from "../../../assets/data";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const ProfileNav = () => {
  const { pathname } = useLocation();

  return (
    <div
      className="hidden col-span-1 md:col-span-2 xl:col-span-1 md:flex flex-col items-center border rounded-lg border-gray-100 sticky"
      style={{
        boxShadow: "0px 0px 4px 0px rgba(194, 194, 194, 0.50)",
      }}
    >
      <div
        className="flex flex-col gap-3 justify-center items-center w-full py-10"
        style={{
          background:
            "linear-gradient(180deg, #F0F9EF 0%, #DDFADA 45.42%, rgba(201, 251, 197, 0.00) 91.95%)",
        }}
      >
        <NcImage className="w-[163px] h-[163px] rounded-full" />
        <button className="flex flex-row gap-2 items-center">
          <span className="font-semibold">Nguyen Van A</span>
          <FaAngleRight className="text-mainColor" />
        </button>
      </div>
      <div className="flex flex-col gap-5 w-full p-2">
        {navProfileData?.map((item) => {
          return (
            <Link
              key={item?.href}
              to={`/profile${item.href}`}
              className="flex flex-row items-center gap-3"
            >
              <div
                className={classNames(
                  "w-[4px] h-[19px] bg-mainColor rounded-2xl",
                  pathname?.split("/")[2] !== item?.href?.split("/")[1] &&
                    "hidden"
                )}
              />
              <p className="text-subColor w-[20px] text-left flex justify-end">
                {item?.icon}
              </p>
              <span className="text-[18px] font-semibold">{item?.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileNav;
