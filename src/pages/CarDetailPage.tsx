import Directory from "../components/common/Directory";
import ImageGridView from "../components/ImageGridView";
import { images } from "../assets/images";
import { HomeListCar } from "../components/containers";
import { carData } from "../assets/data";
import CarDetailInfo from "../components/containers/CarDetail/CarDetailInfo";
import CarDetailMoreInfo from "../components/containers/CarDetail/CarDetailMoreInfo";
import CarDetailPay from "../components/containers/CarDetail/CarDetailPay";

const CarDetailPage = () => {
  return (
    <div className="container mx-auto">
      <Directory />
      <ImageGridView photos={images.car} />

      <div className="">
        <div className="grid grid-cols-6 gap-5 py-[55px]">
          <div className="col-span-6 md:col-span-3 p-3 md:p-0 xl:col-span-4">
            <CarDetailInfo />
            <CarDetailMoreInfo />
          </div>
          <CarDetailPay />
        </div>
        <HomeListCar
          data={[...carData, ...carData]}
          title="Xe Gần Đây"
          subTitle="Gợi ý"
        />
      </div>
    </div>
  );
};

export default CarDetailPage;
