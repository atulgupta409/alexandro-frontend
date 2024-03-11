import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './main/header/Header';
import Home from './pages/home/Home';
import Logo from "./images/logo.png";

function App() {
  return (
    <>
      <Header Logo={Logo} />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
