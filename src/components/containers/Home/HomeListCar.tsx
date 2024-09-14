import { useCallback, useEffect, useState } from "react";
import CarCard from "../../common/CardCar";
import SwiperCustomer from "../../common/SwiperCustomer";
import Title from "../../common/Title";
import TitleSmall from "../../common/TitleSmall";
import { ICarData } from "../../../assets/data";

interface IHomeListCar {
  title: string;
  subTitle: string;
  data: ICarData[];
}

const HomeListCar = (props: IHomeListCar) => {
  const { title, subTitle, data } = props;
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
    <div className="container mx-auto flex justify-center flex-col items-center py-[30px] md:py-[60px]">
      <TitleSmall title={subTitle} />
      <Title title={title} className="mt-4 mb-5" />

      <div className="w-full px-3">
        <SwiperCustomer
          data={data}
          slidesPerView={width < 640 ? 2 : width <= 1280 ? 3 : 4}
          children={(carData) => <CarCard size="small" data={carData} />}
          className="xl:w-2/3"
          spaceBetween={10}
        />
      </div>
    </div>
  );
};

export default HomeListCar;
