import { useCallback, useEffect, useState } from "react";
import { newsData } from "../../../assets/data";
import NewsItem from "../../NewsItem";
import SwiperCustomer from "../../common/SwiperCustomer";
import Title from "../../common/Title";
import TitleSmall from "../../common/TitleSmall";

const HomeUpdate = () => {
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

  return (
    <div className="container mx-auto flex items-center justify-center flex-col md:p-[60px]">
      <TitleSmall title="Cập nhật" />
      <Title title="Tin Tức" className=" mt-4 mb-5" />
      <div className=" w-full">
        <SwiperCustomer
          data={newsData}
          children={(item: any) => NewsItem({ item })}
          slidesPerView={width <= 640 ? 1 : 2}
          spaceBetween={20}
          className="xl:w-2/3"
        />
      </div>
    </div>
  );
};

export default HomeUpdate;
