import { images } from "../../../assets/images";
import NcImage from "../../NcImage/NcImage";
import Button from "../../common/Button";
import Title from "../../common/Title";
import TitleSmall from "../../common/TitleSmall";

const HomeIntroduce = () => {
  return (
    <div className=" flex items-center flex-col-reverse xl:flex-row justify-center relative overflow-hidden md:py-[60px]">
      <div className="p-5  w-full md:w-2/3 xl:w-[450px] flex flex-col gap-20px">
        <div className="flex flex-col gap-[15px]">
          <TitleSmall title={"Giới thiệu"} />
          <Title
            title="CẦN THUÊ Ô TÔ CÓ NGAY 3GO"
            className="text-3xl md:text-5xl font-bold leading-snug mt-4 mb-5"
          />
        </div>
        <p className="text-xl md:text-[22px] font-[500] leading-relaxed text-[#272727]">
          Thoải mái vi vu khắp nơi với nhiều mẫu xe mới mỗi ngày. <br />
          3GO – trung gian kết nối, đáp ứng các nhu cầu, hiện thực hóa mong muốn
          của chủ sở hữu xe và người thuê xe
        </p>
        {/* communication */}
        <div className="flex flex-row gap-2 my-4 items-center justify-center xl:justify-start mx-auto md:mx-0">
          <button>
            <NcImage src={images.chplay} />
          </button>
          <button>
            <NcImage src={images.appstore} />
          </button>
          <button>
            <NcImage src={images.zalo} />
          </button>
        </div>
        <Button content="Tải app để đặt xe" />
      </div>

      <div className="md:w-1/3">
        <NcImage
          src={images.Ellipse}
          className="absolute right-0 bottom-20 z-0 hidden xl:flex"
        />
        <NcImage
          src={images.homeIntruduceCar}
          className="object-cover xl:absolute right-0 bottom-1 h-80 md:h-full"
        />
      </div>
    </div>
  );
};

export default HomeIntroduce;
