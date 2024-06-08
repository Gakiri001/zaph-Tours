import "./assets/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Destination from "./Pages/Destination/Destination";
import Trips from "./Pages/Trips/Trips";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Trips" element={<Trips />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
