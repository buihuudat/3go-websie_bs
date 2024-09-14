import { icons, images } from "../../../assets/images";
import NcImage from "../../NcImage/NcImage";
import Title from "../../common/Title";
import TitleSmall from "../../common/TitleSmall";

const data = [
  {
    icon: icons.phoneIcon,
    title: "1. Chọn xe và thời gian thuê",
    content: "Chọn thời gian, địa điểm và đặt xe qua ứng dụng 3GO ",
  },
  {
    icon: icons.leaseIcon,
    title: "2. Thủ tục xác thực",
    content:
      "Xác thực CCCD/hộ chiếu, bằng lái xe. Đặt cọc và thanh toán tiện lợi",
  },
  {
    icon: icons.carKeyIcon,
    title: "3. Bắt đầu hành trình",
    content: "Chủ động nhận xe và kích hoạt mở xe dễ dàng bằng ứng dụng 3GO",
  },
  {
    icon: icons.testDriveIcon,
    title: "4. Trả xe và kết thúc chuyến đi",
    content: "Tận hưởng chuyến đi an toàn và vui vẻ",
  },
];

const HomeInstruct = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-14 py-[60px] relative overflow-hidden">
      <NcImage
        src={images.Ellipse}
        className="hidden md:flex absolute -right-5 -top-[120px] w-[200px] md:w-[120px]"
      />
      <NcImage
        src={images.homeCar2}
        className="object-cover h-[300px] md:h-[500px] xl:h-auto w-[500px] rounded-md"
      />
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
        <TitleSmall title="Hướng dẫn" />
        <Title title="Thủ Tục Thuê Xe Đơn Giản" className="mt-4 mb-5" />
        <div className="flex flex-col gap-10 md:gap-10 w-3/4">
          {data?.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-1">
              <div className="flex flex-row gap-6">
                <NcImage
                  src={item.icon}
                  className="h-10 md:h-8 xl:h-full object-cover"
                />
                <p className="text-xl xl:text-[24px] font-semibold">
                  {item.title}
                </p>
              </div>
              <p className="text-sm ml-10 xl:text-[18px] text-[#868A8D]">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeInstruct;
