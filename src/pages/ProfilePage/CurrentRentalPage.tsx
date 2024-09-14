import { useState } from "react";
import ProfileTab from "../../components/containers/Profile/ProfileTab";
import { tabProfileData } from "../../assets/data";
import CarVertical from "../../components/CarVertical";

const CurrentRentalPage = () => {
  const [tabSelected, setTabSelected] = useState<string | null>(
    tabProfileData[0]?.type
  );

  const renderCars = () => {
    return (
      <div className="flex flex-row gap-1 flex-wrap h-[700px] w-full overflow-auto px-5 md:px-0">
        {[...Array(10)]?.map((_, index) => {
          return <CarVertical key={index} />;
        })}
      </div>
    );
  };
  return (
    <div>
      <ProfileTab
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
        data={tabProfileData}
      />
      <div className="pt-5 w-full">{renderCars()}</div>
    </div>
  );
};

export default CurrentRentalPage;
