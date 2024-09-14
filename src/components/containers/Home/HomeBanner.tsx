import { images } from "../../../assets/images";

const HomeBanner = () => {
  return (
    <div
      className="w-full h-[365px] text-white flex items-end justify-center"
      style={{
        background: `url(${images.homeBanner}) center center`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <p className="pb-8 md:text-2xl font-bold capitalize md:w-2/4 text-center">
        Trải nghiệm sự khác biệt từ hơn 8000 xe gia đình đời mới khắp Việt Nam
      </p>
    </div>
  );
};

export default HomeBanner;
