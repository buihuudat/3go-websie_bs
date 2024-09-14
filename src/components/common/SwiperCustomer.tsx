import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import classNames from "classnames";

interface ISwiper {
  data: unknown[];
  children: (item: unknown) => React.ReactNode;
  className?: string;
  loop?: boolean;
  pagination?: any;
  autoplay?: any;
  slidesPerView?: number;
  spaceBetween?: number;
}

const SwiperCustomer = (props: ISwiper) => {
  const {
    data,
    children,
    className,
    autoplay,
    slidesPerView = 3,
    spaceBetween,
  } = props;
  if (!data?.length) return;

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      slidesPerView={slidesPerView}
      loop={props.loop ?? true}
      className={classNames(className)}
      autoplay={
        autoplay && {
          ...autoplay,
          delay: 2500,
          disableOnInteraction: false,
        }
      }
      pagination={{
        clickable: true,
      }}
      spaceBetween={spaceBetween}
      {...props}
    >
      {data?.map((item, index) => {
        return <SwiperSlide key={index}>{children(item)}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default SwiperCustomer;
