import React from "react";
import {
  findOutMore,
  infoCompany,
  partners,
  policies,
  socialData,
} from "../assets/data";
import { images } from "../assets/images";
import { Link } from "react-router-dom";
import NcImage from "./NcImage/NcImage";

const Footer = () => {
  return (
    <div className="p-5 px-10 mt-10">
      <div className="flex flex-col-reverse md:flex-row justify-around my-5">
        <div className="w-full md:w-3/12 my-5 md:my-0">
          <img src={images.LogoVertical} />
          <p className="my-3 font-semibold text-[22px]">THÔNG TIN CÔNG TY</p>
          <div className="flex flex-col gap-2">
            {infoCompany?.map((item, index) => {
              return (
                <div key={index} className="flex flex-row items-center gap-2">
                  <img src={item?.icon} />
                  <p>{item?.content}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-row items-center gap-5 mt-5">
            <div className="flex flex-row gap-5">
              {socialData?.map((item, index) => {
                if (!item?.icon) return;
                return React.createElement(item?.icon, {
                  key: index,
                  className: "cursor-pointer",
                });
              })}
            </div>
            <NcImage src={images.footerRegistered} />
          </div>
        </div>
        <div>
          <h1 className="text-[22px]">Chính sách</h1>
          <div className="flex flex-col mt-3 gap-1">
            {policies?.map((item, index) => (
              <Link
                key={index}
                to={item?.path}
                className="text-[#868A8D] text-[16px]"
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[22px]">Đối tác</h1>
          <div className="flex flex-col mt-3 gap-1">
            {partners?.map((item, index) => (
              <Link
                key={index}
                to={item?.path}
                className="text-[#868A8D] text-[16px]"
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[22px]">Tìm hiểu thêm</h1>
          <div className="flex flex-col mt-3 gap-1">
            {findOutMore?.map((item, index) => (
              <Link
                key={index}
                to={item?.path}
                className="text-[#868A8D] text-[16px]"
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <p className="md:text-[20px] text-[#868A8D] mt-5 mb-10">
          Copyright © 3GO | Powered by DigiBird
        </p>
      </div>
    </div>
  );
};

export default Footer;
