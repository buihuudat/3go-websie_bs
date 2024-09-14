import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

interface ITabProfile {
  tabSelected: string | null;
  setTabSelected: React.Dispatch<React.SetStateAction<string | null>>;
  data: {
    type: string;
    title: string;
  }[];
}

const ProfileTab = ({ tabSelected, setTabSelected, data }: ITabProfile) => {
  return (
    <div className="flex flex-row items-center justify-center gap-10 w-full mx-auto">
      <Swiper slidesPerView={"auto"} spaceBetween={30}>
        {data?.map((item) => {
          return (
            <SwiperSlide className="w-max" key={item?.type}>
              <button
                className={classNames(
                  "md:text-xl w-max text-nowrap",
                  item?.type === tabSelected &&
                    "text-primaryColor border-b border-primaryColor"
                )}
                onClick={() => setTabSelected(item?.type)}
              >
                {item?.title}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProfileTab;
