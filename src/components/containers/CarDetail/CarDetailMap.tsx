import { useCallback, useEffect, useState } from "react";
import TitleWithBorder from "../../common/TitleWithBorder";

const CarDetailMap = () => {
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
    <div>
      <TitleWithBorder title="Vị trí xe" className="mb-3" />
      <span className="text-[#8CC542] font-semibold">
        72A Trịnh Khắc Lập, Phường Bình Trưng Tây, Quận 2, Thành phố Hồ Chí Minh{" "}
      </span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.7012019683816!2d106.75531171350883!3d10.780460183566493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525dbd73bd21d%3A0xe3256096b62a11b8!2zODcgVOG6oSBIaeG7h24sIFBoxrDhu51uZyBCw6xuaCBUcsawbmcgVMOieSwgUXXhuq1uIDIsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1720065457967!5m2!1svi!2s"
        width={width < 1280 ? "100%" : "800"}
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default CarDetailMap;
