import { images } from "../../../assets/images";
import Title from "../../common/Title";
import TitleSmall from "../../common/TitleSmall";
import SwiperCustomer from "../../common/SwiperCustomer";
import NcImage from "../../NcImage/NcImage";
import { useCallback, useEffect, useState } from "react";

const HomeProgram = () => {
  const { programImage1, programImage2, programImage3 } = images;
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  const data = [
    programImage1,
    programImage2,
    programImage3,
    programImage1,
    programImage2,
    programImage3,
  ];

  return (
    <div className="container mx-auto flex flex-col text-center justify-center md:py-[60px]">
      <TitleSmall title="Chương trình" className="mx-auto" />
      <Title title="Khuyến Mãi Hiện Có" className=" mt-4 mb-5" />
      <div className="w-full">
        <SwiperCustomer
          slidesPerView={width <= 640 ? 1.5 : width <= 1280 ? 2 : 3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="xl:w-2/3 mx-auto"
          data={data}
          spaceBetween={20}
          children={(item: any) => (
            <NcImage
              src={item}
              alt=""
              className="h-72 md:h-[20rem] object-cover rounded-lg"
            />
          )}
        />
      </div>
    </div>
  );
};

export default HomeProgram;
