import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './main/header/Header';
import Home from './pages/home/Home';
import Logo from "./images/logo.png";
import Footer from './main/footer/Footer';
import BottomForm from './pages/shared/bottom-form/BottomForm';

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
      </Routes>
      <BottomForm />
      <Footer socialLinks={socialLinks} />
    </>
  );
}

export default App;
