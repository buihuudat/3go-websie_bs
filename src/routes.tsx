import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import HomePage from "./pages/HomePage";
import CarDetail from "./pages/CarDetailPage";
import AuthLayout from "./components/layouts/AuthLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RentalCarPage from "./pages/RentalCarPage";
import ProfilePage from "./pages/ProfilePage";
import CurrentRentalPage from "./pages/ProfilePage/CurrentRentalPage";
import RentalManagementPage from "./pages/ProfilePage/RentalManagementPage";
import FavoriteVehiclesPage from "./pages/ProfilePage/FavoriteVehiclesPage";
import AddressBookPage from "./pages/ProfilePage/AddressBookPage";
import TermsAndPoliciesPage from "./pages/ProfilePage/TermsAndPoliciesPage";
import ContactAndFeedbackPage from "./pages/ProfilePage/ContactAndFeedbackPage";
import UtilityPage from "./pages/ProfilePage/UtilityPage";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/car-detail" element={<CarDetail />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="profile" element={<ProfilePage />}>
          <Route path="utility" element={<UtilityPage />} />
          <Route path="current-rental" element={<CurrentRentalPage />} />
          <Route path="rental-management" element={<RentalManagementPage />} />
          <Route path="favorite-vehicles" element={<FavoriteVehiclesPage />} />
          <Route path="address-book" element={<AddressBookPage />} />
          <Route path="terms-and-policies" element={<TermsAndPoliciesPage />} />
          <Route
            path="contact-and-feedback"
            element={<ContactAndFeedbackPage />}
          />
        </Route>
        <Route path="rental-car" element={<RentalCarPage />} />
      </Route>
      <Route index path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
