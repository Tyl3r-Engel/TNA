import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import LandingPage from "./components/landingPage/LandingPage";
import ServicesPage from "./components/servicesPage/ServicesPage";
import SchedulingPage from "./components/schedulingPage/SchedulingPage";
import Footer from "./components/nav/Footer";
import { ServicesPageProvider } from "./contexts/ServicesPageProvider";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/services" element={ <ServicesPageProvider> <ServicesPage /> </ServicesPageProvider> } />
        <Route path="/scheduling" element={<SchedulingPage />} />
        {/* <Route path={"*"} element={<PageNotFound />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
