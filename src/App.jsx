import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Packages from "./pages/packages";
import WebSeries from "./pages/WebSeries";
import NavBar from "./components/NavBar";
import KidsShows from "./pages/KidsShows";
import Footer from "./components/Footer";
import PaymentMode from "./pages/PaymentMode";
import ConfirmationPage from "./pages/ConfirmationPage";
function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/webseries" element={<WebSeries />} />
          <Route path="/kidsshows" element={<KidsShows />} />
          <Route path="/paymentmode" element={<PaymentMode />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
