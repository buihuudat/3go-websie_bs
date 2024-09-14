import Directory from "../../components/common/Directory";
import ProfileNav from "../../components/containers/Profile/ProfileNav";
import { Outlet } from "react-router-dom";
import ProfileNavMobile from "../../components/containers/Profile/ProfileNavMobile";
import { useEffect } from "react";

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto min-screen relative">
      <Directory />
      <div className="grid grid-cols-5 mt-3 md:mt-10 gap-10">
        <ProfileNav />
        <div className="col-span-6 md:col-span-3 xl:col-span-4">
          <Outlet />
          <ProfileNavMobile />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
