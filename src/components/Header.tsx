import { images } from "../assets/images";
import { headerData } from "../assets/data";
import { IHeaderData } from "../assets/types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import NcImage from "./NcImage/NcImage";
import { useState } from "react";
import { bellIcon } from "../assets/images/svgImage";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user] = useState(null);

  return (
    <div className="flex flex-row justify-around items-center sticky top-0 bg-white py-5 z-50">
      <MenuMobile user={user} />
      {/* logo */}
      <img
        src={images.logo}
        className="object-cover md:w-[80px] xl:w-[100px] cursor-pointer "
        onClick={() => navigate("/")}
      />
      {/* <NcImage
        src={""}
        className="md:hidden w-7 h-7 rounded-full hover:animate-ping cursor-pointer"
      /> */}

      <button className="relative md:hidden">
        <span className="absolute flex h-3 w-3 -right-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mainColor opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-mainColor"></span>
        </span>
        {/* {bellIcon} */}
        <NcImage
          src={""}
          className="md:hidden w-9 h-9 rounded-full cursor-pointer"
        />
      </button>
      {/* links */}
      <ul className="hidden md:flex flex-row md:gap-5 xl:gap-10">
        {headerData.map((item: IHeaderData) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={`font-semibold text-base ${
                item.path === pathname && "text-[#0664A4]"
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* actions */}
      <div className="hidden md:flex">
        {!user ? (
          <div className="flex flex-row gap-10">
            <button className="relative">
              <span className="absolute flex h-3 w-3 -right-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mainColor opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-mainColor"></span>
              </span>
              {bellIcon}
            </button>
            <div className="flex flex-row items-center gap-2">
              <NcImage src={""} className="w-7 h-7 rounded-full" />
              <Link to={"/profile/current-rental"} className="font-semibold">
                Nguyễn Văn A
              </Link>
              <button>
                <FaChevronDown />
              </button>
            </div>
          </div>
        ) : (
          <div className=" flex-row items-center md:gap-3 xl:gap-5">
            <h3 className="font-semibold" onClick={() => navigate("/register")}>
              Đăng ký
            </h3>
            <button
              className="font-semibold px-7 py-1 bg-[#0C3958] text-white rounded-full"
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
