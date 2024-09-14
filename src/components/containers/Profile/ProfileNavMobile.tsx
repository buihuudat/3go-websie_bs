import { useLocation, useNavigate } from "react-router-dom";
import { navProfileData } from "../../../assets/data";

const ProfileNavMobile = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="block md:hidden fixed w-full bottom-0 p-3 bg-white">
      <div className="flex flex-row justify-between items-center">
        {navProfileData?.map((item) => {
          return (
            <button
              key={item.href}
              onClick={() => navigate(`/profile${item.href}`)}
              style={{
                filter:
                  pathname?.split("/")[2] === item?.href?.split("/")[1]
                    ? "invert(15%) sepia(100%) hue-rotate(200deg) saturate(400%) brightness(100%)"
                    : "",
              }}
            >
              {item.icon}
              {/* <span>{item.title}</span> */}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileNavMobile;
