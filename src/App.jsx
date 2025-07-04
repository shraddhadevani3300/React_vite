import 'bootstrap/dist/css/bootstrap.min.css';            // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';    
   // Bootstrap JS (includes Popper)
import Home from "./Home";
import Shop from "./Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Contactus from './Contactus';
import Electronics from './Electronics';
import Nofound from './Nofound';

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="Contactus" element={<Contactus/>} />
        <Route path="electronics" element={<Electronics/>} />
        <Route path="*" element={<Nofound/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
};

export default App;