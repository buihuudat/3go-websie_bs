import { Outlet } from "react-router-dom";
// import Footer from "../Footer";

const AppLayout = () => {
  return (
    <div>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
