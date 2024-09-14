import { images } from "../../../assets/images";
import NcImage from "../../NcImage/NcImage";
import Title from "../../common/Title";
import TitleSmall from "../../common/TitleSmall";

const HomeDownApp = () => {
  return (
    <div
      style={{
        background: `url(${images.bgDownApp}) center center no-repeat`,
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
      className="w-full h-[1020px] md:h-[720px] rounded-lg relative"
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
        className="absolute inset-0 flex flex-col justify-end items-center"
      >
        <TitleSmall title="Hãy nhanh tay" className="bg-[#EFF5FA]" />
        <Title title="Trải Nghiệm Trọn Vẹn Cùng 3GO" className="my-3 md:my-5" />

        {/* communication */}
        <div className="flex flex-row gap-1 ">
          <button className="w-[100px] md:full">
            <NcImage src={images.chplayLight} />
          </button>
          <button className="w-[100px] md:full">
            <NcImage src={images.appstoreLight} />
          </button>
          <button className="w-[100px] md:full">
            <img src={images.zaloLight} />
          </button>
        </div>

        <div className="flex flex-col items-center md:flex-row justify-center gap-1 md:gap-10 mt-10 w-full">
          <div className="w-full md:w-[400px] flex flex-col gap-1 md:gap-10 mt-10 px-3 md:px-0">
            <div className="text-[#EDEEF0]">
              <h1 className="mb-3 text-xl md:text-[24px]">
                Lái xe an toàn cùng 3GO
              </h1>
              <h2 className="text-sm md:text-[18px]">
                Chuyến đi trên 3GO được bảo vệ với Gói bảo hiểm thuê xe tự lái
                từ MIC & VNI.
              </h2>
            </div>
            <div className="text-[#EDEEF0]">
              <h1 className="mb-3 text-xl md:text-[24px]">An tâm đặt xe</h1>
              <h2 className="text-sm md:text-[18px]">
                Không tính phí huỷ chuyến trong vòng 1h sau khi đặt cọc. Hoàn
                cọc và bồi thường 100% nếu chủ xe huỷ chuyến trong vòng 7 ngày
                trước chuyến đi.
              </h2>
            </div>
          </div>
          <NcImage
            src={images.phone}
            className="hidden md:flex w-[100px] md:w-[315px]"
          />
          <div className="w-full md:w-[400px] flex flex-col gap-1 md:gap-10 mt-10 mb-10 md:mb-0 px-3 md:px-0">
            <div className="text-[#EDEEF0]">
              <h1 className="mb-3 text-xl md:text-[24px]">Thủ tục đơn giản</h1>
              <h2 className="text-sm md:text-[18px]">
                Chỉ cần có CCCD gắn chip (Hoặc Passport) & Giấy phép lái xe là
                bạn đã đủ điều kiện thuê xe trên 3GO
              </h2>
            </div>
            <div className="text-[#EDEEF0]">
              <h1 className="mb-3 text-xl md:text-[24px]">
                Thanh toán dễ dàng
              </h1>
              <h2 className="text-sm md:text-[18px]">
                Chủ động kích hoạt xe . Đa dạng hình thức thanh toán: ATM, thẻ
                Visa & Ví điện tử
              </h2>
            </div>
          </div>
          <NcImage
            src={images.phone}
            className="flex md:hidden w-[250px] md:w-[315px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeDownApp;
