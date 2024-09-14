import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IHeaderData } from "../assets/types";
import { headerData } from "../assets/data";
import classNames from "classnames";
import "../assets/styles/MenuMobile.css";

export default function MenuMobile({ user }: { user: unknown }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  const toggleMenu = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShow]);

  return (
    <div className="overflow-hidden">
      <div className="text-center md:hidden">
        <button onClick={toggleMenu}>
          {isShow ? (
            <IoClose className="w-6 h-6 text-gray-400" />
          ) : (
            <TiThMenu className="w-6 h-6 text-gray-400" />
          )}
        </button>
        <div className={classNames("menu-mobile mt-14 ", isShow ? "open" : "")}>
          <div className="menu-content pt-14 flex flex-col py-10">
            <ul className="flex flex-col gap-10 items-center">
              {headerData.map((item: IHeaderData) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`font-bold text-xl ${
                      item.path === pathname && "text-[#0664A4]"
                    }`}
                    onClick={() => setIsShow(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              {user ? (
                <button className="w-1/2 bg-red-300 text-white py-3 rounded-full font-semibold text-xl">
                  Logout
                </button>
              ) : (
                <div className="flex flex-row justify-center items-center  gap-5">
                  <h3
                    className="font-semibold text-xl"
                    onClick={() => navigate("/register")}
                  >
                    Đăng ký
                  </h3>
                  <button
                    className="font-semibold text-xl px-7 py-1 bg-[#0C3958] text-white rounded-full"
                    onClick={() => navigate("/login")}
                  >
                    Đăng nhập
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
