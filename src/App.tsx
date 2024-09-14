import { RecoilRoot } from "recoil";
import { RootRoutes } from "./routes";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
// import ProfileNav from "./components/containers/Profile/ProfileNav";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <RootRoutes />
        <Footer />
        {/* <ProfileNav /> */}
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
