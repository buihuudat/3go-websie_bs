import { useEffect } from "react";
import TitleWithBorder from "../../common/TitleWithBorder";
import NcImage from "../../NcImage/NcImage";

const CarDetailReview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-3">
      <TitleWithBorder title="Đánh giá" className="mb-3" />
      <div className="flex flex-row gap-5 md:gap-32 md:items-center w-full justify-between md:justify-start">
        <div className="flex flex-col">
          <div className="flex flex-row items-end gap-2">
            <p className="text-secondGreen text-2xl font-bold">4.5</p>
            <p className="font-semibold text-secondGreen">Rất tốt</p>
          </div>
          <p className="font-semibold text-sm">345 bình luận</p>
        </div>
        <div className="flex flex-row flex-wrap w-2/3 md:w-1/3">
          {[...Array(5)].map((_, index) => {
            return (
              <div key={index} className="">
                <div className="flex flex-row gap-1 items-center">
                  <p className="text-sx">{index + 1}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M7.03658 0.866507L8.09247 2.99573C8.23645 3.29212 8.62041 3.57642 8.94437 3.63086L10.8582 3.95145C12.082 4.15712 12.37 5.05236 11.4881 5.9355L10.0003 7.43563C9.74828 7.68968 9.6103 8.17964 9.68829 8.53048L10.1142 10.3875C10.4502 11.8574 9.67629 12.426 8.38643 11.6578L6.59263 10.5871C6.26867 10.3935 5.73473 10.3935 5.40476 10.5871L3.61096 11.6578C2.3271 12.426 1.54719 11.8513 1.88315 10.3875L2.3091 8.53048C2.3871 8.17964 2.24911 7.68968 1.99714 7.43563L0.509303 5.9355C-0.3666 5.05236 -0.084631 4.15712 1.13923 3.95145L3.05302 3.63086C3.37099 3.57642 3.75494 3.29212 3.89893 2.99573L4.95481 0.866507C5.53075 -0.288836 6.46664 -0.288836 7.03658 0.866507Z"
                      fill="#FACC15"
                    />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="109"
                  height="7"
                  viewBox="0 0 109 7"
                  fill="none"
                >
                  <rect width="67" height="7" rx="2" fill="#D3D5D6" />
                  <rect
                    width={`${index + 1}0%`}
                    height="7"
                    rx="2"
                    fill="#8CC542"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>

      {/* user  profil */}
      <div className="flex flex-row items-center gap-1 pt-5 pb-2">
        <NcImage src="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <p className="text-sm">Nguyễn Thiên Ân</p>
          <span className="text-sm text-[#8F90A6]">12/11/2023</span>
        </div>
      </div>

      {/* nịnh */}
      <p className="font-semibold text-[#868A8D]">
        Chủ xe dễ thương, xe mới và rất êm
      </p>

      <button className="flex items-center justify-center w-full bg-[white] rounded-full border py-1 border-gray-400 mt-5">
        <span className="text-[#8C8C8C]">345 Bình luận</span>
      </button>
    </div>
  );
};

export default CarDetailReview;
