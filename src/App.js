import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './main/header/Header';
import Home from './pages/home/Home';
import Logo from "./images/logo.png";
import Footer from './main/footer/Footer';
import BottomForm from './pages/shared/bottom-form/BottomForm';
import LocationDetail from './pages/coworking/location-details/LocationDetail';
import CoworkingDetail from './pages/coworking/coworking-details/CoworkingDetail';
import OfficeSpaceDetails from './pages/office-space/office-space-details/OfficeSpaceDetails';
import OfficeSpaceLocation from './pages/office-space/office-space-location/OfficeSpaceLocation';
import CoworkingLanding from './pages/coworking/coworking-landing/CoworkingLanding';
import OfficeSpaceLanding from './pages/office-space/office-space-landing/OfficeSpaceLanding';

function App() {

    const socialLinks = [
      {
        icon: <i class="fa-brands fa-facebook-f"></i>,
        url: "https://www.facebook.com/AlexandroSpaces/"
      },
      {
        icon: <i class="fa-brands fa-twitter"></i>,
        url: "https://twitter.com/AlexandroSpaces"
      },
      {
        icon: <i class="fa-brands fa-instagram"></i>,
        url: "https://www.instagram.com/alexandro.spaces/"
      },
      {
        icon: <i class="fa-brands fa-pinterest-p"></i>,
        url: "https://in.pinterest.com/AlexandroSpaces/"
      }
    ]

  return (
    <>
      <Header Logo={Logo} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coworking-space-in-gurgaon" element={<CoworkingLanding />} />
        <Route exact path="/coworking-space-on-golf-course-road" element={<LocationDetail />} />
        <Route exact path="/coworking-space/innov8-orchid-centre-golf-course-road" element={<CoworkingDetail />} />
        <Route exact path="/office-space-in-gurgaon" element={<OfficeSpaceLanding />} />
        <Route exact path="/gurgaon/commercial-office-space-in-golf-course-road-gurgaon" element={<OfficeSpaceLocation />} />
        <Route exact path="/gurgaon/office-space-in-global-foyer-sector-43-gurgaon" element={<OfficeSpaceDetails />} />
      </Routes>
      <BottomForm />
      <Footer socialLinks={socialLinks} />
    </>
  );
}

export default App;
