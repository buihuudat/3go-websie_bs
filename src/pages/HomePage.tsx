import { carData } from "../assets/data";
import {
  HomeBanner,
  HomeDownApp,
  HomeInstruct,
  HomeIntroduce,
  HomeListCar,
  HomeProgram,
  HomeUpdate,
} from "../components/containers";
import HomeDadvite from "../components/containers/Home/HomeDadvite";

const HomePage = () => {
  return (
    <div className="">
      {/* banner */}
      <HomeBanner />
      {/* introduce */}
      <HomeIntroduce />
      {/* program */}
      <HomeProgram />
      {/* suggest */}
      <HomeListCar
        subTitle="Gợi ý"
        title="Xe Gần Đây"
        data={[...carData, ...carData, ...carData]}
      />
      {/* discover */}
      <HomeListCar
        subTitle="Khám phá"
        title="Xe Đang Ưu Đãi"
        data={[...carData, ...carData, ...carData]}
      />
      {/* instruct */}
      <HomeInstruct />
      {/* update */}
      <HomeUpdate />
      {/* advite */}
      <HomeDadvite />
      {/* down app */}
      <HomeDownApp />
    </div>
  );
};

export default HomePage;
