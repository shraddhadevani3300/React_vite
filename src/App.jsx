import 'bootstrap/dist/css/bootstrap.min.css';            // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';       // Bootstrap JS (includes Popper)
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
   <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default App;